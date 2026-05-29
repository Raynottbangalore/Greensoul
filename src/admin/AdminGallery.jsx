import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase';
import { Upload, X, Trash2, Edit2, Check, CloudUpload } from 'lucide-react';
import toast from 'react-hot-toast';

const DEFAULT_CATEGORIES = [
  'Architecture',
  'Interiors',
  'Landscape',
  'Dining'
];

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Architecture');
  
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editFile, setEditFile] = useState(null);

  const fetchImages = async () => {
    try {
      const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setImages(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type.startsWith('image/')) {
        setFile(selectedFile);
        if (!title) setTitle(selectedFile.name.split('.')[0]);
      } else {
        toast.error('Please select a valid image file');
      }
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      if (selectedFile.type.startsWith('image/')) {
        setFile(selectedFile);
        if (!title) setTitle(selectedFile.name.split('.')[0]);
      } else {
        toast.error('Please select a valid image file');
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select an image file");
      return;
    }
    if (!title.trim()) {
      toast.error("Please provide an image title");
      return;
    }

    setUploading(true);
    setProgress(0);
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `gallery/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (error) => {
        console.error("Upload error:", error);
        toast.error("Upload failed!");
        setUploading(false);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, 'gallery'), {
            url: downloadURL,
            storagePath: `gallery/${fileName}`,
            createdAt: serverTimestamp(),
            name: title,
            category: category,
            alt: title
          });
          toast.success("Image added to gallery!");
          setFile(null);
          setTitle('');
          setCategory('Architecture');
          if (fileInputRef.current) fileInputRef.current.value = '';
          fetchImages();
        } catch (error) {
          console.error("Database error:", error);
          toast.error("Failed to save image info");
        } finally {
          setUploading(false);
          setProgress(0);
        }
      }
    );
  };

  const handleDelete = async (id, storagePath) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      if (storagePath) {
        const imageRef = ref(storage, storagePath);
        await deleteObject(imageRef);
      }
      await deleteDoc(doc(db, 'gallery', id));
      toast.success("Image deleted");
      fetchImages();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete image");
    }
  };

  const startEditing = (img) => {
    setEditingId(img.id);
    setEditTitle(img.name || '');
    setEditCategory(img.category || 'Architecture');
    setEditFile(null);
  };

  const saveEdit = async (image) => {
    try {
      let newUrl = image.url;
      let newStoragePath = image.storagePath;

      if (editFile) {
        // Delete old image if it exists
        if (image.storagePath) {
          try {
            await deleteObject(ref(storage, image.storagePath));
          } catch(e) {
            console.error("Old image delete failed", e);
          }
        }
        
        // Upload new image
        const fileName = `${Date.now()}_${editFile.name}`;
        const storageRef = ref(storage, `gallery/${fileName}`);
        const uploadTask = await uploadBytesResumable(storageRef, editFile);
        newUrl = await getDownloadURL(uploadTask.ref);
        newStoragePath = `gallery/${fileName}`;
      }

      await updateDoc(doc(db, 'gallery', image.id), {
        name: editTitle,
        category: editCategory,
        alt: editTitle,
        url: newUrl,
        storagePath: newStoragePath
      });
      
      toast.success("Image updated");
      setEditingId(null);
      setEditFile(null);
      fetchImages();
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update image");
    }
  };

  return (
    <div className="space-y-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#D4C3A3] text-[10px] tracking-[0.3em] uppercase font-medium mb-4">Management</p>
        <h1 className="font-heading text-4xl lg:text-5xl tracking-[-0.02em] text-[#E9E8E1]">Gallery</h1>
      </motion.div>

      {/* Add New Asset Card (Styled like user's request) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#2A3326] border border-[#E9E8E1]/10 shadow-sm p-8 max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#E9E8E1]/10">
          <div className="bg-[#E9E8E1]/10 p-3 rounded-full text-[#D4C3A3]">
            <CloudUpload size={24} />
          </div>
          <div>
            <h2 className="text-xl font-heading text-[#E9E8E1]">Add New Gallery Asset</h2>
            <p className="text-xs text-[#E9E8E1]/50 mt-1">Upload an image file and assign its category</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#E9E8E1]/70 mb-2">Image Title / Name *</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Earth Suite Verandah" 
                className="w-full bg-[#222A1F] border border-[#E9E8E1]/20 p-4 text-[#E9E8E1] focus:outline-none focus:border-[#D4C3A3] transition-colors placeholder:text-[#E9E8E1]/30"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#E9E8E1]/70 mb-2">Category *</label>
              <input 
                type="text" 
                list="category-options"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Select or type a new category"
                className="w-full bg-[#222A1F] border border-[#E9E8E1]/20 p-4 text-[#E9E8E1] focus:outline-none focus:border-[#D4C3A3] transition-colors"
              />
              <datalist id="category-options">
                {DEFAULT_CATEGORIES.map(c => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#E9E8E1]/70 mb-2">Image File *</label>
            <div 
              className={`border-2 border-dashed ${isDragActive ? 'border-[#D4C3A3] bg-[#D4C3A3]/5' : 'border-[#E9E8E1]/20 hover:border-[#E9E8E1]/40'} 
                p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange} 
              />
              
              {!file ? (
                <>
                  <div className="bg-[#E9E8E1]/10 p-4 rounded-full mb-4 text-[#E9E8E1]">
                    <Upload size={24} />
                  </div>
                  <p className="text-[#E9E8E1] font-medium mb-1">Drag & Drop your image here or</p>
                  <p className="text-[#D4C3A3]">Browse from device</p>
                  <p className="text-[10px] text-[#E9E8E1]/40 mt-4 uppercase tracking-wider">Supports High-res PNG, JPG, WEBP</p>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="bg-[#D4C3A3]/20 p-4 rounded-full mb-4 text-[#D4C3A3]">
                    <Check size={24} />
                  </div>
                  <p className="text-[#E9E8E1] font-medium mb-1">{file.name}</p>
                  <p className="text-[10px] text-[#E9E8E1]/50 uppercase tracking-wider">Ready to upload</p>
                </div>
              )}

              {uploading && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#222A1F]">
                  <div 
                    className="h-full bg-[#D4C3A3] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              onClick={handleSubmit}
              disabled={uploading || !file}
              className="bg-[#D4C3A3] text-[#2c312a] px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#E9E8E1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {uploading ? (
                `Uploading ${Math.round(progress)}%`
              ) : (
                <>
                  <Upload size={16} />
                  Add to Gallery
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Uploaded Assets List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="font-heading text-2xl text-[#E9E8E1] mb-6 border-b border-[#E9E8E1]/10 pb-4">Manage Uploaded Assets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div key={image.id} className="bg-[#2A3326] border border-[#E9E8E1]/10 group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.name || 'Gallery image'} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                {editingId === image.id ? (
                  <div className="space-y-3 mb-4 flex-1">
                    <input 
                      type="text" 
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full bg-[#222A1F] border border-[#E9E8E1]/20 p-2 text-sm text-[#E9E8E1] focus:outline-none focus:border-[#D4C3A3]"
                    />
                    <input 
                      type="text" 
                      list="category-options"
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      placeholder="Category"
                      className="w-full bg-[#222A1F] border border-[#E9E8E1]/20 p-2 text-sm text-[#E9E8E1] focus:outline-none focus:border-[#D4C3A3]"
                    />
                    <div className="pt-2 border-t border-[#E9E8E1]/10">
                      <label className="block text-[10px] uppercase text-[#E9E8E1]/50 mb-1">Replace Image</label>
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => setEditFile(e.target.files[0])}
                        className="w-full text-xs text-[#E9E8E1]/70 file:mr-2 file:py-1 file:px-2 file:border-0 file:text-[10px] file:uppercase file:tracking-widest file:bg-[#E9E8E1]/10 file:text-[#E9E8E1] hover:file:bg-[#E9E8E1]/20 transition-colors"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 flex-1">
                    <p className="text-[#E9E8E1] font-medium truncate" title={image.name}>{image.name}</p>
                    <p className="text-[10px] text-[#D4C3A3] uppercase tracking-wider mt-1">{image.category}</p>
                  </div>
                )}
                
                <div className="flex gap-2 pt-4 border-t border-[#E9E8E1]/10">
                  {editingId === image.id ? (
                    <>
                      <button onClick={() => saveEdit(image)} className="flex-1 flex justify-center items-center gap-2 py-2 bg-[#E9E8E1]/10 hover:bg-[#D4C3A3] hover:text-[#2c312a] text-[#E9E8E1] text-[10px] uppercase tracking-widest transition-colors">
                        <Check size={14} /> Save
                      </button>
                      <button onClick={() => setEditingId(null)} className="flex-1 flex justify-center items-center gap-2 py-2 bg-[#E9E8E1]/5 hover:bg-[#E9E8E1]/20 text-[#E9E8E1] text-[10px] uppercase tracking-widest transition-colors">
                        <X size={14} /> Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEditing(image)} className="flex-1 flex justify-center items-center gap-2 py-2 bg-[#E9E8E1]/5 hover:bg-[#E9E8E1]/10 text-[#E9E8E1] text-[10px] uppercase tracking-widest transition-colors">
                        <Edit2 size={14} /> Edit
                      </button>
                      <button onClick={() => handleDelete(image.id, image.storagePath)} className="flex-1 flex justify-center items-center gap-2 py-2 bg-red-900/20 hover:bg-red-500/20 text-red-400 text-[10px] uppercase tracking-widest transition-colors">
                        <Trash2 size={14} /> Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
