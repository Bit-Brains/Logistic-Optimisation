import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import axios from "axios";

function formatToINR(amount) {
  return amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).replace('₹', '₹ ');
}

export default function ShopCategory() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [supplierData, setSupplierData] = useState(null);

  const categories = [
    { value: "Engine", label: "Engine" },
    { value: "Mirrors", label: "Mirrors" },
    { value: "Tires", label: "Tyres" },
    { value: "RoofComponents", label: "Roof Component" },
    { value: "BodyPanels", label: "Body Panels" },
    { value: "Seats", label: "Seats" },
    { value: "lights", label: "Lights" },
  ];

  const subcategories = {
    Engine: [
      { value: "Petrol Engine", label: "Petrol Engine" },
      { value: "Electric Engine", label: "Electric Engine" },
      { value: "Diesel Engine", label: "Diesel Engine" },
      { value: "Hybrid Engine", label: "Hybrid Engine" },
    ],
    Mirrors: [
      { value: "Rearview Mirror", label: "Rearview Mirror" },
      { value: "Side Mirror", label: "Side Mirror" },
    ],
    Tires: [
      { value: "Tubeless tires", label: "Tubeless tires" },
      { value: "Tube-Type tires", label: "Tube-Type tires" },
      { value: "All-Season tires", label: "All-Season tires" },
    ],
    lights: [
      { value: "Head Lights", label: "Head Lights" },
      { value: "Tail Lights", label: "Tail Lights" },
      { value: "Fog Lights", label: "Fog Lights" },
    ],
    Seats: [
      { value: "Front Seat", label: "Front Seat" },
      { value: "RearSeat", label: "Rear Seat" },
    ],
    BodyPanels: [
      { value: "hood", label: "Hood" },
      { value: "doors", label: "Doors" },
      { value: "Trunk Lid", label: "Trunk Lid" },
    ],
    RoofComponents: [
      { value: "Sunroof", label: "Sunroof" },
      { value: "Roof rack", label: "Roof Rack" },
      { value: "antena", label: "Antena" },
    ],
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory("");
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const fetchSupplierData = async (category, subcategory) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3001/opti/optimizedDistanceAndCost",
        {
          partName: subcategory,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setSupplierData(response.data);
      console.log(supplierData);
    } catch (error) {
      console.error("Error fetching supplier data", error);
      // You can set error state here if needed
    }
  };

  const handleGetResultsClick = () => {
    if (selectedCategory && selectedSubCategory) {
      fetchSupplierData(selectedCategory, selectedSubCategory);
    } else {
      alert("Please select both category and subcategory");
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Find Suppliers
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Category"
            >
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" disabled={!selectedCategory}>
            <InputLabel id="subcategory-label">Subcategory</InputLabel>
            <Select
              labelId="subcategory-label"
              id="subcategory"
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              label="Subcategory"
            >
              {selectedCategory &&
                subcategories[selectedCategory].map((subcategory) => (
                  <MenuItem key={subcategory.value} value={subcategory.value}>
                    {subcategory.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGetResultsClick}
            disabled={!selectedCategory || !selectedSubCategory}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Get Results
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {supplierData && (
            <>
              <Card>
                <CardHeader title="Nearest Supplier" />
                <CardContent>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography>Name:</Typography>
                    <Typography>
                      {supplierData.nearestSupplier.supplier.firstName}{" "}
                      {supplierData.nearestSupplier.supplier.lastName}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography>Distance:</Typography>
                    <Typography>
                      {(supplierData.nearestSupplier.distance) / 1000} KM.
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Price:</Typography>
                    <Typography>{formatToINR(supplierData.nearestSupplier.price)} </Typography>
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ marginTop: 2 }}>
                <CardHeader title="Cheapest Supplier" />
                <CardContent>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography>Name:</Typography>
                    <Typography>
                      {supplierData.cheapestSupplier.supplier.firstName}{" "}
                      {supplierData.cheapestSupplier.supplier.lastName}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography>Distance:</Typography>
                    <Typography>
                      {(supplierData.cheapestSupplier.distance) / 1000} KM.
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Price:</Typography>
                    <Typography> {formatToINR(supplierData.cheapestSupplier.price)}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

