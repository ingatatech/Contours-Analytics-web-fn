"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from "./layout";
import { Search, Eye, Edit, Trash2, Users, Plus, Package } from "lucide-react";
import axios from "@/lib/axios";
import { toast } from "react-hot-toast";
import RichTextEditor from "../ui/RichTextEditor";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

interface MainService {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  order: number;
}

interface Service {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  order: number;
  mainService: MainService;
  createdAt: string;
  updatedAt: string;
}

interface ServiceFormData {
  name: string;
  description: string;
  mainServiceId: string;
  isActive: boolean;
 
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [mainServices, setMainServices] = useState<MainService[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [mainServiceFilter, setmainServiceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<ServiceFormData>({
    name: "",
    description: "",
    mainServiceId: "",
    isActive: true,
  });


const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchServices();
    fetchMainServices();
  }, [currentPage, searchTerm, mainServiceFilter, statusFilter]);

  // Reset to first page when filters change
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [searchTerm, mainServiceFilter, statusFilter]);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "10",
      });

      // Only add search param if searchTerm is not empty
      if (searchTerm && searchTerm.trim() !== "") {
        params.append("search", searchTerm.trim());
      }

      // Only add mainService param if it's not "all"
      if (mainServiceFilter && mainServiceFilter !== "all") {
        params.append("mainService", mainServiceFilter);
      }

      // Only add status param if it's not "all"
      if (statusFilter && statusFilter !== "all") {
        params.append("isActive", statusFilter);
      }

      const response = await axios.get(`/services/sub-services/all?${params}`);
      console.log(response.data.data);
      setServices(response.data.data);
      setTotalPages(response.data.pagination.pages);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to fetch services");
    } finally {
      setLoading(false);
    }
  };

  const fetchMainServices = async () => {
    try {
      const response = await axios.get("/services");
      setMainServices(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch mainServices");
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       setIsSubmitting(true)
      if (selectedService) {
        await axios.patch(`/services/sub-services/${selectedService.id}`, formData);
        toast.success("Service updated successfully");
        setIsEditModalOpen(false);
      } else {
        await axios.post("/services/sub-services", formData);
        toast.success("Service created successfully");
        setIsAddModalOpen(false);
      }
      fetchServices();
      resetForm();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to save Sub-service");
    }finally {
      setIsSubmitting(false)
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this sub-service?")) {
      try {
        await axios.delete(`/services/sub-services/${id}`);
        toast.success("Service deleted successfully");
        fetchServices();
      } catch (error: any) {
        toast.error(
          error.response?.data?.message || "Failed to delete service"
        );
      }
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      await axios.patch(`/services/sub-services/${id}/toggle-status`);
      toast.success("Service status updated");
      fetchServices();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  function openAddModal() {
    resetForm();
    setIsAddModalOpen(true);
  }

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      mainServiceId: "",
      isActive: true,
    });
    setSelectedService(null);

  };

  const openEditModal = (service: Service) => {
    setSelectedService(service);
    setFormData({
      name: service.name,
      description: service.description,
      mainServiceId: service.mainService?.id || "",
      isActive: service.isActive,
    
    });
    setIsEditModalOpen(true);
  };

  const openViewModal = (service: Service) => {
    setSelectedService(service);
    setIsViewModalOpen(true);
  };




  // Clear filters function
  const clearFilters = () => {
    setSearchTerm("");
    setmainServiceFilter("all");
    setStatusFilter("all");
    setCurrentPage(1);
  };

  async function handleReorder(result: DropResult) {
    if (!result.destination) return;
    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;
    if (sourceIndex === destIndex) return;

    const newServices = Array.from(services);
    const [removed] = newServices.splice(sourceIndex, 1);
    newServices.splice(destIndex, 0, removed);
    const serviceIds = newServices.map((service: Service) => service.id);
    
    try {
      await axios.patch("/services/sub-services/reorder", { serviceIds });
      toast.success("Sub-services order updated successfully!");
      fetchServices();
    } catch (err: any) {
      toast.error("Failed to update sub-services order");
      fetchServices();
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Sub-services Management
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">
                  Manage your organization's Sub-Services
                </p>
              </div>
            </div>

            <Button
              onClick={() => openAddModal()}
              className="bg-primary-500 hover:bg-primary-500/90 text-white shadow-md hover:shadow-lg transition-all duration-300 px-3 py-2 sm:px-4 sm:py-2 flex items-center justify-center text-sm sm:text-base"
            >
              <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Add Sub-Service
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Filter and search sub-services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search sub-services..."
                    value={searchTerm}
                    onChange={(e:any) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              <Select value={mainServiceFilter} onValueChange={setmainServiceFilter}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="All Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  {mainServices.map((mainService) => (
                    <SelectItem key={mainService.id} value={mainService.id}>
                      {mainService.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="true">Active</SelectItem>
                  <SelectItem value="false">Inactive</SelectItem>
                </SelectContent>
              </Select>
              {(searchTerm || mainServiceFilter !== "all" || statusFilter !== "all") && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">#</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead className="truncate">Main Services</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <DragDropContext onDragEnd={handleReorder}>
                  <Droppable droppableId="services">
                    {(provided) => (
                      <TableBody {...provided.droppableProps} ref={provided.innerRef}>
                        {loading ? (
                          Array.from({ length: 5 }).map((_, index) => (
                            <TableRow key={index} className="h-12">
                              <TableCell colSpan={7}>
                                <div className="flex items-center space-x-4">
                                  <div className="h-4 bg-gray-200 rounded animate-pulse flex-1"></div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : services.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center py-8">
                              No services found
                            </TableCell>
                          </TableRow>
                        ) : (
                          services.map((service, index) => (
                            <Draggable key={service.id} draggableId={service.id} index={index}>
                              {(provided) => (
                                <TableRow
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="h-12 align-middle"
                                >
                        <TableCell className="w-16 text-center">
                          <span className="text-sm font-medium text-slate-500">
                            {(currentPage - 1) * 10 + index + 1}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="space-y-1">
                            <div
                              className="font-semibold truncate max-w-[200px]"
                              title={service.name}
                            >
                              {service.name}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="truncate max-w-[120px]"
                            title={service.mainService?.name}
                          >
                            {service.mainService?.name}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div
                            className="truncate max-w-[300px]"
                            dangerouslySetInnerHTML={{
                              __html:
                                service.description.substring(0, 60) +
                                "...",
                            }}
                          />
                        </TableCell>
                   
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={service.isActive}
                              onCheckedChange={() =>
                                handleToggleStatus(service.id)
                              }
                            />
                            <span className="text-sm">
                              {service.isActive ? "Active" : "Inactive"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openViewModal(service)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openEditModal(service)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(service.id)}
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
                    )}
                  </Droppable>
                </DragDropContext>
              </Table>
            </div>
          </CardContent>
        </Card>

        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}

        {/* Add/Edit Modal */}
        <Dialog
          open={isAddModalOpen || isEditModalOpen}
          onOpenChange={(open) => {
            if (!open) {
              setIsAddModalOpen(false);
              setIsEditModalOpen(false);
              resetForm();
            }
          }}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle>
                {selectedService ? "Edit Sub-Service" : "Add New Sub-Service"}
              </DialogTitle>
              <DialogDescription>
                {selectedService
                  ? "Update sub-service information"
                  : "Create a new sub-service"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
             

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Sub-Service Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e: any) => {
                          const name = e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            name,
                          }));
                        }}
                        required
                      />
                    </div>
                 
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Sub-Service Description
                    </Label>
                    <RichTextEditor
                      value={formData.description}
                      onChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: value,
                        }))
                      }
                      placeholder="Enter sub-service description..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mainServiceId">Main Service</Label>
                      <Select
                        value={formData.mainServiceId}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            mainServiceId: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {mainServices.map((mainService) => (
                            <SelectItem key={mainService.id} value={mainService.id}>
                              {mainService.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                  
                  </div>
              

              <DialogFooter>
                <Button type="submit"
                disabled={isSubmitting}
                >   
                  {selectedService ? "Save" : "Save"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Redesigned View Modal */}
        <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-50 to-white border-0 shadow-2xl">
            <DialogHeader className="border-b bg-white/80 backdrop-blur-sm top-0 z-10 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <DialogTitle className="text-2xl font-bold text-slate-900">
                    Sub-Service Details
                  </DialogTitle>
                  <p className="text-sm text-slate-600 mt-1">
                    Complete service information and metrics
                  </p>
                </div>
              </div>
            </DialogHeader>
            
            {selectedService && (
              <div className="overflow-y-auto flex-1 p-1">
                <div className="space-y-8 p-5">
                  {/* Header Card */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="text-xs uppercase tracking-wide font-semibold text-slate-500 mb-2 block">
                            Service Name
                          </Label>
                          <h3 className="text-xl font-bold text-slate-900">{selectedService.name}</h3>
                        </div>
                   
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-xs uppercase tracking-wide font-semibold text-slate-500 mb-2 block">
                            mainService
                          </Label>
                          <Badge variant="outline" className="text-sm px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
                            {selectedService.mainService?.name}
                          </Badge>
                        </div>
                        <div className="flex flex-col space-y-2 text-xs text-slate-500">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                            Created: {new Date(selectedService.createdAt).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                            Updated: {new Date(selectedService.updatedAt).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Card */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <Label className="text-xs uppercase tracking-wide font-semibold text-slate-500 mb-4 block">
                      Service Description
                    </Label>
                    <div
                      className="prose prose-slate prose-sm max-w-none leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: selectedService.description,
                      }}
                    />
                  </div>

                

              
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}