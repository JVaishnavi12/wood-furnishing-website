import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


function BulkOrderForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    projectTimeline: '',
    projectDetails: '',
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit Phone Number is required';
    if (!formData.businessName) newErrors.businessName = 'Business Name is required';
    if (!formData.businessType) newErrors.businessType = 'Select a Business Type';
    if (!formData.projectTimeline) newErrors.projectTimeline = 'Select Project Timeline';
    if (!formData.projectDetails) newErrors.projectDetails = 'Project Details are required';
    if (!formData.agreed) newErrors.agreed = 'You must agree to the terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      // Here you can send the data to backend
    }
  };

  return (
    <section className="bulk-order-form-section py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Request Bulk Order Quote</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="businessName">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  isInvalid={!!errors.businessName}
                />
                <Form.Control.Feedback type="invalid">{errors.businessName}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="businessType">
                <Form.Label>Business Type</Form.Label>
                <Form.Select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  isInvalid={!!errors.businessType}
                >
                  <option value="">Select Business Type</option>
                  <option value="Retail">Retail</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Hospitality">Hospitality</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors.businessType}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="projectTimeline">
                <Form.Label>Project Timeline</Form.Label>
                <Form.Select
                  name="projectTimeline"
                  value={formData.projectTimeline}
                  onChange={handleChange}
                  isInvalid={!!errors.projectTimeline}
                >
                  <option value="">Select Timeline</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2-3 Months">2-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="Flexible">Flexible</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors.projectTimeline}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="projectDetails">
            <Form.Label>Project Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              isInvalid={!!errors.projectDetails}
            />
            <Form.Control.Feedback type="invalid">{errors.projectDetails}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="agreed">
            <Form.Check
              type="checkbox"
              name="agreed"
              label="I agree to the terms and conditions"
              checked={formData.agreed}
              onChange={handleChange}
              isInvalid={!!errors.agreed}
              feedback={errors.agreed}
              feedbackType="invalid"
            />
          </Form.Group>

          <Button type="submit" variant="dark">Submit Inquiry</Button>
        </Form>
      </div>
    </section>
  );
}

export default BulkOrderForm;

