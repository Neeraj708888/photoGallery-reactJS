import React, { useState } from "react";
import { Trash2, Eye, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CreateCollectionModal from "../../modals/CreateCollectionModal";
import EditCollectionModal from "../../modals/EditCollectionModal";
import DeleteModal from "../../modals/DeleteModal";
import Pagination from "../../../utils/Pagination";


const CollectionList = () => {
  const navigate = useNavigate();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");

  // Static data
  const [collections, setCollections] = useState([
    {
      id: 1,
      name: "Nature Collection",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 2,
      name: "Wedding Vibes",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Festive Special",
      image:
        "https://images.unsplash.com/photo-1604937455090-5e3a1e6b7b5b?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 4,
      name: "Haldi Ceremony",
      image:
        "https://images.unsplash.com/photo-1623091411396-79c12a3f1b28?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 5,
      name: "Reception Night",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Nature Collection",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 7,
      name: "Wedding Vibes",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Festive Special",
      image:
        "https://images.unsplash.com/photo-1604937455090-5e3a1e6b7b5b?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 9,
      name: "Haldi Ceremony",
      image:
        "https://images.unsplash.com/photo-1623091411396-79c12a3f1b28?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 10,
      name: "Reception Night",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
      status: "Inactive",
    },
    {
      id: 11,
      name: "Nature Collection",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 12,
      name: "Wedding Vibes",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
      status: "Inactive",
    },
    {
      id: 13,
      name: "Festive Special",
      image:
        "https://images.unsplash.com/photo-1604937455090-5e3a1e6b7b5b?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 14,
      name: "Haldi Ceremony",
      image:
        "https://images.unsplash.com/photo-1623091411396-79c12a3f1b28?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    },
    {
      id: 15,
      name: "Reception Night",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
      status: "Inactive",
    },
  ]);

  const [createCollectionModal, setCreateCollectionModal] = useState(false);
  const [editCollectionModal, setEditCollectionModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const totalItems = collections.length;
  const totalPages = Math.ceil(totalItems / limit);

  // Slice data for pagination
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = collections.slice(startIndex, endIndex);

  // Delete handlers
  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    setCollections((prev) => prev.filter((col) => col.id !== selectedItem.id));
    setIsDeleteOpen(false);
    setSelectedItem(null);
  };

  const cancelDelete = () => {
    setIsDeleteOpen(false);
    setSelectedItem(null);
  };

  // Add Collection
  const handleSaveCollection = (name) => {
    const newCollection = {
      id: collections.length + 1,
      name,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
      status: "Active",
    };
    setCollections([...collections, newCollection]);
    setCreateCollectionModal(false);
  };

  // Edit Collection
  const handleEditCollection = (collection) => {
    setSelectedCollection(collection);
    setEditCollectionModal(true);
  };

  const handleUpdateCollection = (updatedCollection) => {
    setCollections((prev) =>
      prev.map((col) =>
        col.id === updatedCollection.id ? updatedCollection : col
      )
    );
    setEditCollectionModal(false);
  };

  // Toggle status
  const handleToggleStatus = (id) => {
    setCollections((prev) =>
      prev.map((col) =>
        col.id === id
          ? { ...col, status: col.status === "Active" ? "Inactive" : "Active" }
          : col
      )
    );
  };

  // Filter + paginate
  const filtered = collections.filter((col) =>
    col.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedData = filtered.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white p-4 md:p-6">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-pink-600 mb-6 tracking-wide">
        💍 Collection Management
      </h1>

      {/* Search + Create */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Collection..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-pink-200 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
        />
        <button
          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-300 shadow-md hover:shadow-lg"
          onClick={() => setCreateCollectionModal(true)}
        >
          + Create
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-pink-100">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-pink-100 text-pink-700">
            <tr>
              <th className="py-3 px-5 font-semibold">SL</th>
              <th className="py-3 px-5 font-semibold">Image</th>
              <th className="py-3 px-5 font-semibold">Collection</th>
              <th className="py-3 px-5 font-semibold">Status</th>
              <th className="py-3 px-5 font-semibold text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-rose-50 border-b border-pink-100 transition duration-200"
                >
                  <td className="py-3 px-5">{startIndex + index + 1}</td>

                  {/* Image */}
                  <td className="py-3 px-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover border border-pink-200 shadow-sm"
                    />
                  </td>

                  <td className="py-3 px-5 font-medium text-gray-700">
                    {item.name}
                  </td>

                  {/* Toggle */}
                  <td className="py-3 px-5 flex items-center">
                    <button
                      onClick={() => handleToggleStatus(item.id)}
                      className={`relative inline-flex items-center w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${
                        item.status === "Active" ? "bg-pink-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block w-5 h-5 transform bg-white rounded-full shadow transition-transform duration-300 ${
                          item.status === "Active"
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      ></span>
                    </button>
                    <span
                      className={`ml-2 text-sm font-medium ${
                        item.status === "Active"
                          ? "text-pink-600"
                          : "text-gray-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-5 text-center">
                    <div className="flex justify-center gap-5 text-pink-600">
                      <button
                        className="hover:text-pink-800 transition"
                        title="View"
                        onClick={() =>
                          navigate("/admin/collection/view", {
                            state: { collection: item },
                          })
                        }
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className="hover:text-rose-700 transition"
                        title="Edit"
                        onClick={() => handleEditCollection(item)}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="hover:text-red-500 transition"
                        title="Delete"
                        onClick={() => handleDeleteClick(item)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-5 text-center text-gray-500 italic"
                >
                  No collections found 💫
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={filtered.length}
        limit={limit}
        onPageChange={(page) => setCurrentPage(page)}
      />

      {/* Modals */}
      {createCollectionModal && (
        <CreateCollectionModal
          onClose={() => setCreateCollectionModal(false)}
          onSave={handleSaveCollection}
        />
      )}
      {editCollectionModal && (
        <EditCollectionModal
          onClose={() => setEditCollectionModal(false)}
          onSave={handleUpdateCollection}
          collection={selectedCollection}
        />
      )}
      <DeleteModal
        isOpen={isDeleteOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title="Delete Collection"
        message={`Are you sure you want to delete "${selectedItem?.name}"?`}
      />
    </div>
  );
};

export default CollectionList;
