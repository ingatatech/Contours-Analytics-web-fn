"use client";

import type React from "react";

import { useState, useEffect } from "react";
import AdminLayoutStructure from "./layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided, DroppableProvided } from "@hello-pangea/dnd";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import RichTextEditor from "../ui/RichTextEditor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Edit,
  Trash2,
  Eye,
  Search,

  Users,
  Mail,
  Phone,
  Plus,
  Crown,
 
  User,
  X,
} from "lucide-react";

import { TeamMember } from "@/lib/types/TeamMember";
import toast from "react-hot-toast";
import api from "@/lib/axios";

import { AnimatePresence, motion } from "framer-motion";
import DeleteConfirmationModal from "../ui/DeleteConfirmationModal";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function LeadersPage() {
  const [leaders, setLeaders] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false)
  const [editingLeader, setEditingLeader] = useState<TeamMember | null>(null);
  const [viewingLeader, setViewingLeader] = useState<TeamMember | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    bio: "",
    email: "",
    linkedinUrl: "",
    phone: "",
    isActive: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    leaderId: string | null;
  }>({ isOpen: false, leaderId: null });

  // Fetch leaders
  const fetchLeaders = async () => {
    try {
      const { data } = await api.get("/team");
      setLeaders(data.data || data);
    } catch (error) {
      console.error("Error fetching leaders:", error);
      toast.error("Error fetching leaders");
    } finally {
      setLoading(false);
    }
  };

 

  useEffect(() => {
    fetchLeaders();
  }, []);



    async function handleReorder(result: DropResult) {
    if (!result.destination) return;
    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;
    if (sourceIndex === destIndex) return;

    const newLeaders = Array.from(leaders);
    const [removed] = newLeaders.splice(sourceIndex, 1);
    newLeaders.splice(destIndex, 0, removed);
    const memberIds = newLeaders.map((member: TeamMember) => member.id);
    try {
      await api.patch("/team/reorder", { memberIds })
      toast.success("Leader order updated successfully!")
      fetchLeaders()
    } catch (err: any) {
      toast.error("Failed to update leader order")
      fetchLeaders() // Revert on error
    }
  }
  // Open modal for adding or editing
  const openModal = (leader?:TeamMember) => {
    if (leader) {
      setEditingLeader(leader);
      setFormData({
        name: leader.name,
        position: leader.position,
        bio: leader.bio,
        email: leader.email || "",
        linkedinUrl: leader.linkedinUrl || "",
        phone: leader.phone || "",
        isActive: leader.isActive,
      });
    } else {
      setEditingLeader(null);
      setFormData({
        name: "",
        position: "",
        bio: "",
        email: "",
        linkedinUrl: "",
        phone: "",
        isActive: true,
      });
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formDataToSend = new FormData();
     // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "education"  || key === "professionalMembership") {
          // Handle arrays by sending as JSON
          formDataToSend.append(key, JSON.stringify(value))
        } else {
          formDataToSend.append(key, String(value))
        }
      })
      
      if (imageFile) {
        formDataToSend.append("image", imageFile)
      }

      if (editingLeader) {
        await api.patch(`/team/${editingLeader.id}`, formDataToSend);
        toast.success("Leader updated successfully");
      } else {
        await api.post("/team", formDataToSend);
        toast.success("Leader created successfully");
      }

      setIsModalOpen(false);
      fetchLeaders();
    } catch (err: any) {
const errorData = err.response?.data;

  if (errorData?.errors && Array.isArray(errorData.errors)) {
    // Extract all validation messages and join them
    const messages = errorData.errors.map((e: any) => e.msg).join(", ");
    toast.error(messages);
  } else if (errorData?.message) {
    // Fallback to general message if no errors array
    toast.error(errorData.message);
  } else {
    toast.error("Failed to save leader");
  }
    } finally {
      setSubmitting(false);
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {

    try {
      await api.delete(`/team/${id}`);
      toast.success("Leader deleted successfully");
      setDeleteModal({ isOpen: false, leaderId: null });

      fetchLeaders();
    } catch (error) {
      console.error("Error deleting leader:", error);
      toast.error("Error deleting leader");
    }
  };

  // Filter leaders
  const filteredLeaders = leaders.filter((leader) => {
    const matchesSearch =
      leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leader.position.toLowerCase().includes(searchTerm.toLowerCase()) ;


    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && leader.isActive) ||
      (statusFilter === "inactive" && !leader.isActive);

    return matchesSearch  && matchesStatus;
  });


    const handleView = (leader: TeamMember) => {
    setViewingLeader(leader)
    setShowViewModal(true)
  }
  return (
    <AdminLayoutStructure>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Leaders Management</h1>
                <p className="text-sm text-slate-600">Manage your organization's leadership team</p>
              </div>
            </div>
            <Button
              onClick={() => openModal()}
              className="bg-primary-500 hover:bg-primary-500/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Leader
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Leaders</p>
                <p className="text-2xl font-bold text-slate-900">{leaders.length}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Leaders</p>
                <p className="text-2xl font-bold text-slate-900">
                  {leaders.filter(l => l.isActive).length}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Crown className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
          
   
    
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search leaders by name, position, or ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

      
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Leaders Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                               					<DragDropContext onDragEnd={handleReorder}>
						<Droppable droppableId="team-table">
							{(provided: DroppableProvided) => (
								<div ref={provided.innerRef} {...provided.droppableProps} className="overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="font-semibold">Image</TableHead>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Position</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="text-right font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    <div className="flex items-center justify-center space-x-2">
                     <LoadingSpinner/>
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredLeaders.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-12 text-slate-500"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <Crown className="h-12 w-12 text-slate-300" />
                      <p className="text-lg font-medium">No leaders found</p>
                      <p className="text-sm">Try adjusting your search filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredLeaders.map((leader, index) => (
                  <Draggable key={leader.id} draggableId={leader.id} index={index}>
                    {(provided: DraggableProvided, snapshot) => (
                      <TableRow
                        key={leader.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`hover:bg-slate-50/50 transition-colors ${snapshot.isDragging ? "bg-sky-100" : ""}`}
                      >
                        <TableCell>
                          <Avatar className="h-12 w-12 ring-2 ring-slate-100">
                            <AvatarImage
                              src={leader.image || "/placeholder.svg"}
                              alt={leader.name}
                            />
                            <AvatarFallback className="bg-gradient-to-r from-primary-500 to-blue-600 text-white font-semibold">
                              {leader.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="font-semibold text-slate-900">
                          {leader.name}
                        </TableCell>
                        <TableCell className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html:leader.position }}/>
                     
                        <TableCell>
                          <Badge
                            variant={leader.isActive ? "default" : "secondary"}
                            className={leader.isActive ? "bg-green-100 text-green-800 border-green-300" : ""}
                          >
                            {leader.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleView(leader)}
                              className="h-8 px-2 hover:bg-blue-50 hover:text-blue-600"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openModal(leader)}
                              className="h-8 px-2 hover:bg-green-50 hover:text-green-600"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setDeleteModal({ isOpen: true, leaderId: leader.id })}
                              className="h-8 px-2 hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </Draggable>
                ))
              )}
            {provided.placeholder}
            </TableBody>
          </Table>
             </div>
            		)}
           		</Droppable>
					</DragDropContext> 
        </div>
      </div>

        {/* View Leader Modal */}
      <AnimatePresence>
        {showViewModal && viewingLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Leadership Details</h2>
                <Button variant="outline" size="sm" onClick={() => setShowViewModal(false)} className="border-slate-200 hover:bg-slate-50">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border">
                  <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden ring-4 ring-white shadow-lg">
                    {viewingLeader.image ? (
                      <img
                        src={viewingLeader.image || "/placeholder.svg"}
                        alt={viewingLeader.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-10 h-10 text-slate-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">{viewingLeader.name}</h3>
                    <p className="text-slate-600 font-medium"dangerouslySetInnerHTML={{ __html:viewingLeader.position }}/>
                    <div className="flex items-center mt-3 space-x-3">
                 
                      <Badge
                        variant={viewingLeader.isActive ? "default" : "secondary"}
                        className={viewingLeader.isActive ? "bg-green-100 text-green-800 border-green-300" : ""}
                      >
                        {viewingLeader.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
               
                  </div>
                </div>

                {/* Bio */}
                {viewingLeader.bio && (
                  <div className="bg-white rounded-lg border p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-primary-500" />
                      Biography
                    </h4>
                    <div 
                      className="text-slate-700 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: viewingLeader.bio }}
                    />
                  </div>
                )}

                {/* Contact Information */}
                {(viewingLeader.email || viewingLeader.phone || viewingLeader.linkedinUrl) && (
                  <div className="bg-white rounded-lg border p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-primary-500" />
                      Contact Information
                    </h4>
                    <div className="space-y-3">
                      {viewingLeader.email && (
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-slate-400" />
                          <a href={`mailto:${viewingLeader.email}`} className="text-primary-500 hover:underline">
                            {viewingLeader.email}
                          </a>
                        </div>
                      )}
                      {viewingLeader.phone && (
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-slate-400" />
                          <a href={`tel:${viewingLeader.phone}`} className="text-primary-500 hover:underline">
                            {viewingLeader.phone}
                          </a>
                        </div>
                      )}
                      {viewingLeader.linkedinUrl && (
                        <div className="flex items-center space-x-3">
                          <svg className="h-4 w-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <a 
                            href={viewingLeader.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-primary-500 hover:underline"
                          >
                            LinkedIn Profile
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create/Edit Leader Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  {editingLeader ? "Edit Leader" : "Add New Leader"}
                </h2>
                <Button variant="outline" size="sm" onClick={() => setIsModalOpen(false)} className="border-slate-200 hover:bg-slate-50">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Basic Information</h3>
                  
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter full name"
                        required
                        className="border-slate-200 focus:border-primary-500 focus:ring-primary-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        position *
                      </label>
                 
                         <RichTextEditor
                      value={formData.position}
                      onChange={(value) => setFormData(prev => ({ ...prev, position: value }))}
                      placeholder="e.g., Head of Professional Practices Corporate Advisory Services"
                      />
                    </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

           


                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      className="rounded border-slate-300 text-primary-500 focus:ring-primary-500"
                    />
                    <label htmlFor="isActive" className="text-sm font-medium text-slate-700">
                      Active Leader
                    </label>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="leader@example.com"
                        className="border-slate-200 focus:border-primary-500 focus:ring-primary-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                        className="border-slate-200 focus:border-primary-500 focus:ring-primary-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        LinkedIn URL
                      </label>
                      <Input
                        type="url"
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                        placeholder="https://linkedin.com/in/username"
                        className="border-slate-200 focus:border-primary-500 focus:ring-primary-500/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Profile Image</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Upload Image
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                        {editingLeader?.image ? (
                          <img
                            src={editingLeader.image}
                            alt="Current"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-8 h-8 text-slate-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                          className="border-slate-200 focus:border-primary-500 focus:ring-primary-500/20"
                        />
                        <p className="text-xs text-slate-500 mt-1">
                          Upload a square image for best results. Max size: 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

        
      

    
                {/* Biography */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Biography</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Professional Bio
                    </label>
                    <RichTextEditor
                      value={formData.bio}
                      onChange={(value) => setFormData(prev => ({ ...prev, bio: value }))}
                      placeholder="Write a brief professional biography..."
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="border-slate-200 hover:bg-slate-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-primary-500 hover:bg-primary-500/90 text-white px-6"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        {editingLeader ? "Updating..." : "Saving..."}
                      </>
                    ) : (
                      editingLeader ? "Save" : "Save"
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
              <DeleteConfirmationModal
  isOpen={deleteModal.isOpen}
  onClose={() => setDeleteModal({ isOpen: false, leaderId: null })}
  onConfirm={handleDelete.bind(null, deleteModal.leaderId!)}
  message="Are you sure you want to delete this Leader? This action cannot be undone."
/>
    </AdminLayoutStructure>
  );
}