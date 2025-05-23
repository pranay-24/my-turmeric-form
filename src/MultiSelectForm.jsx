import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import   './form_style.css'
const MultiSelectForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    companyName: '',
    jobTitle: '',
    states: [],
    specialties: [],
    services: [],
    annualRevenue: '',
    comments: ''
  });
  
  const [statesOpen, setStatesOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [revenueOpen, setRevenueOpen] = useState(false);

  
  // Refs for click-outside handling
  const statesRef = useRef(null);
  const specialtiesRef = useRef(null);
  const servicesRef = useRef(null);
  const revenueRef = useRef(null);

  useEffect(() => {
    const sendDimensions = () => {
        const width = document.body.scrollWidth;
        const height = document.body.scrollHeight;
        window.parent.postMessage({ 
            type: 'resize', 
            height,
            width
        }, '*');
    };

    sendDimensions();
       // Send height when window resizes
    window.addEventListener('resize',  sendDimensions);


    const handleClickOutside = (event) => {
      /*
      if (statesRef.current && !statesRef.current.contains(event.target)) {
        setStatesOpen(false);
      }
        */
      

  if (statesRef.current && !statesRef.current.contains(event.target)) {
    setStatesOpen(false);

  }

      if (specialtiesRef.current && !specialtiesRef.current.contains(event.target)) {
        setSpecialtiesOpen(false);

      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }

      if (revenueRef.current && !revenueRef.current.contains(event.target)) {
        setRevenueOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', sendDimensions);
    };

    
  }, []);

  // Your existing state and specialty options
  const states = [
    { value: 'alabama', label: 'Alabama' },
    { value: 'alaska', label: 'Alaska' },
    { value: 'arizona', label: 'Arizona' },
    { value: 'arkansas', label: 'Arkansas' },
    { value: 'california', label: 'California' },
    { value: 'colorado', label: 'Colorado' },
    { value: 'connecticut', label: 'Connecticut' },
    { value: 'delaware', label: 'Delaware' },
    { value: 'florida', label: 'Florida' },
    { value: 'georgia', label: 'Georgia' },
    { value: 'hawaii', label: 'Hawaii' },
    { value: 'idaho', label: 'Idaho' },
    { value: 'illinois', label: 'Illinois' },
    { value: 'indiana', label: 'Indiana' },
    { value: 'iowa', label: 'Iowa' },
    { value: 'kansas', label: 'Kansas' },
    { value: 'kentucky', label: 'Kentucky' },
    { value: 'louisiana', label: 'Louisiana' },
    { value: 'maine', label: 'Maine' },
    { value: 'maryland', label: 'Maryland' },
    { value: 'massachusetts', label: 'Massachusetts' },
    { value: 'michigan', label: 'Michigan' },
    { value: 'minnesota', label: 'Minnesota' },
    { value: 'mississippi', label: 'Mississippi' },
    { value: 'missouri', label: 'Missouri' },
    { value: 'montana', label: 'Montana' },
    { value: 'nebraska', label: 'Nebraska' },
    { value: 'nevada', label: 'Nevada' },
    { value: 'new_hampshire', label: 'New Hampshire' },
    { value: 'new_jersey', label: 'New Jersey' },
    { value: 'new_mexico', label: 'New Mexico' },
    { value: 'new_york', label: 'New York' },
    { value: 'north_carolina', label: 'North Carolina' },
    { value: 'north_dakota', label: 'North Dakota' },
    { value: 'ohio', label: 'Ohio' },
    { value: 'oklahoma', label: 'Oklahoma' },
    { value: 'oregon', label: 'Oregon' },
    { value: 'pennsylvania', label: 'Pennsylvania' },
    { value: 'rhode_island', label: 'Rhode Island' },
    { value: 'south_carolina', label: 'South Carolina' },
    { value: 'south_dakota', label: 'South Dakota' },
    { value: 'tennessee', label: 'Tennessee' },
    { value: 'texas', label: 'Texas' },
    { value: 'utah', label: 'Utah' },
    { value: 'vermont', label: 'Vermont' },
    { value: 'virginia', label: 'Virginia' },
    { value: 'washington', label: 'Washington' },
    { value: 'west_virginia', label: 'West Virginia' },
    { value: 'wisconsin', label: 'Wisconsin' },
    { value: 'wyoming', label: 'Wyoming' }
  ];

  
    const specialties = [
        { value: 'front_end', label: 'Front-End Billing' },
        { value: 'mid_end', label: 'Mid-End Billing' },
        { value: 'back_end', label: 'Back-End Billing' },
        
        { value: 'allergy', label: 'Allergy' },
        { value: 'anesthesiology', label: 'Anesthesiology' },
        { value: 'cardiology', label: 'Cardiology' },
        { value: 'dermatology', label: 'Dermatology' },
        { value: 'emergency_medicine', label: 'Emergency Medicine' },
        { value: 'endocrinology', label: 'Endocrinology' },
        { value: 'family_practice', label: 'Family Practice' },
        { value: 'gastroenterology', label: 'Gastroenterology' },
        { value: 'general_surgery', label: 'General Surgery' },
        { value: 'geriatrics', label: 'Geriatrics' },
        { value: 'hematology', label: 'Hematology' },
        { value: 'hospitalist', label: 'Hospitalist' },
        { value: 'immunology', label: 'Immunology' },
        { value: 'internal_medicine', label: 'Internal Medicine' },
        { value: 'nephrology', label: 'Nephrology' },
        { value: 'neurology', label: 'Neurology' },
        { value: 'ob_gyn', label: 'OB-GYN' },
        { value: 'oncology', label: 'Oncology' },
        { value: 'ophthalmology', label: 'Ophthalmology' },
        { value: 'optometry', label: 'Optometry' },
        { value: 'orthopedics', label: 'Orthopedics' },
        { value: 'otolaryngology', label: 'Otolaryngology' },
        { value: 'pain_management', label: 'Pain Management' },
        { value: 'pathology', label: 'Pathology' },
        { value: 'pediatrics', label: 'Pediatrics' },
        { value: 'physical_therapy', label: 'Physical Therapy' },
        { value: 'podiatry', label: 'Podiatry' },
        { value: 'psychiatry', label: 'Psychiatry' },
        { value: 'psychology', label: 'Psychology' },
        { value: 'pulmonology', label: 'Pulmonology' },
        { value: 'radiation_oncology', label: 'Radiation Oncology' },
        { value: 'radiology', label: 'Radiology' },
        { value: 'rheumatology', label: 'Rheumatology' },
        { value: 'urology', label: 'Urology' },
        { value: 'wound_care', label: 'Wound Care' },
        { value: 'other', label: 'Other' }
    ];
    
  
    const revenueOptions = [
        { value: '<200000', label: '< $200,000' },
        { value: '200000 - 500000', label: '$200,000 - $500,000' },
        { value: '500000-1M', label: '$500,000 - $1,000,000' },
        { value: '1M-5M', label: '$1,000,000 - $5,000,000' },
        { value: '5M-10M', label: '$5,000,000 - $10,000,000' },
        { value: '10M-20M', label: '$10,000,000 - $20,000,000' },
        { value: '> 20M', label: '> $20,000,000' }
      ];

      const services = [
        { value: 'all', label: 'Select All' }, 
        { value: 'eligibility', label: 'Insurance Eligibility and Benefits Verification' },
        { value: 'prior_auth', label: 'Prior Authorization' },
        { value: 'demographics', label: 'Patient Demographic Entry' },
        { value: 'coding', label: 'Medical Coding' },
        { value: 'cdi', label: 'Clinical Documentation Improvement (CDI)' },
        { value: 'audits', label: 'Coding Audits' },
        { value: 'claims', label: 'Claim Submission' },
        { value: 'posting', label: 'Payment Posting' },
        { value: 'balance', label: 'Credit Balance Management' },
        { value: 'denials', label: 'Denial Management' }
      ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone) => {
    // Allows formats like (123) 456-7890, 123-456-7890, or 1234567890
    const phoneRegex = /^(\+?\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phoneRegex.test(phone);
};


const validateForm = () => {
    const errors = {};
    let firstError = null;

    // Sequential validation - checking fields in order of appearance
    if (!formData.firstName) {
        errors.firstName = 'First Name is required';
        firstError = firstError || 'firstName';
    }

    if (!formData.lastName) {
        errors.lastName = 'Last Name is required';
        firstError = firstError || 'lastName';
    }

    if (!formData.phone) {
        errors.phone = 'Phone Number is required';
        firstError = firstError || 'phone';
    } else if (!validatePhone(formData.phone)) {
        errors.phone = 'Please enter a valid phone number (e.g., (123) 456-7890)';
        firstError = firstError || 'phone';
    }

    if (!formData.email) {
        errors.email = 'Email is required';
        firstError = firstError || 'email';
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
        firstError = firstError || 'email';
    }

    if (!formData.companyName) {
        errors.companyName = 'Company Name is required';
        firstError = firstError || 'companyName';
    }

    if (!formData.jobTitle) {
        errors.jobTitle = 'Job Title is required';
        firstError = firstError || 'jobTitle';
    }

    if (formData.states.length === 0) {
        errors.states = 'Please select at least one state';
        firstError = firstError || 'states';
    }

    if (formData.specialties.length === 0) {
        errors.specialties = 'Please select at least one specialty';
        firstError = firstError || 'specialties';
    }

    if (formData.services.length === 0) {
        errors.services = 'Please select at least one service';
        firstError = firstError || 'services';
    }

    if (!formData.annualRevenue) {
        errors.annualRevenue = 'Annual Revenue is required';
        firstError = firstError || 'annualRevenue';
    }
    
    setFormErrors(errors);

    // If there's an error, scroll to the first error field
    if (firstError) {
        const element = document.getElementById(firstError);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.focus();
        }
    }

    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus('submitting');

    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
      // You can replace this URL with your serverless function endpoint
      // or Google Sheets API endpoint
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              submittedAt: new Date().toISOString(),
              source: window.location.href
            }),
          });
         
           // Log the full response for debugging
  const responseText = await response.text();
  console.log('Server response:', response.status, responseText);

          if (!response.ok) {
    let errorMessage;
    try {
      const errorData = JSON.parse(responseText);
      errorMessage = errorData.error || 'Submission failed';
    } catch (e) {
      errorMessage = responseText || 'Submission failed';
    }
    throw new Error(errorMessage);
  }

      
        setSubmitStatus('success');
        // Reset form
        setFormData({
           firstName: '',
        lastName: '',
        phone: '',
        email: '',
        companyName: '',
        jobTitle: '',
        states: [],
        specialties: [],
        services: [],
        annualRevenue: '',
        comments: ''
        });
    

    }catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }
  };
  const toggleState = (value) => {
    const newStates = formData.states.includes(value)
      ? formData.states.filter(state => state !== value)
      : [...formData.states, value];
    setFormData({...formData, states: newStates});
  };

const toggleSpecialty = (value) => {
    const newSpecialties = formData.specialties.includes(value)
      ? formData.specialties.filter(specialty => specialty !== value)
      : [...formData.specialties, value];
    setFormData({...formData, specialties: newSpecialties});
  };

  const toggleService = (value) => {
    let newServices;
    if (value === 'all') {
      // If Select All is clicked
      if (formData.services.length === services.length - 1) { // -1 because we don't count the "Select All" option
        newServices = []; // Deselect all if everything was selected
      } else {
        newServices = services.filter(s => s.value !== 'all').map(s => s.value); // Select all except "Select All" option
      }
    } else {
      // Regular toggle for individual services
      newServices = formData.services.includes(value)
        ? formData.services.filter(service => service !== value)
        : [...formData.services, value];
    }
    setFormData({...formData, services: newServices});
  };

  
  return (
    <div className="w-full max-w-full sm:py-4 sm:px-4 ">
    <div className="  mx-auto tw-border tw-rounded-1 my-element py-6 px-6 sm:px-6 md:px-8 ">
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="grid grid-cols-1 gap-5 md:grid-col-2">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="label_input">First Name<span class="sup">*</span></label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            className="p-2 border  min40"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="label_input">Last Name<span class="sup">*</span></label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            className="p-2 border  min40"
            required
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 gap-5 md:grid-col-2">
        <div className="flex flex-col">
          <label htmlFor="phone" className="label_input">Phone Number<span class="sup">*</span></label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="p-2 border  min40"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="label_input">Email Address<span class="sup">*</span></label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="p-2 border min40"
            required
          />
        </div>
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="companyName" className="label_input">Company Name<span class="sup">*</span></label>
          <input
            id="companyName"
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            className="p-2 border  min40"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="jobTitle" className="label_input">Job Title<span class="sup">*</span></label>
          <input
            id="jobTitle"
            type="text"
            value={formData.jobTitle}
            onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
            className="p-2 border  min40"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* States Dropdown */}
        
        <div className="relative" >
          <label className="block label_input">
            State<span className="text-red-500">*</span>
          </label>
          <div  ref={statesRef}>
          <button
            type="button"
            onClick={() => setStatesOpen(!statesOpen)}
            className="w-full p-2 border  min40 flex justify-between items-center bg-white"
           
          >
            <span class="fade-text">{formData.states.length ? `${formData.states.length} states selected` : 'Select Multiple States'}</span>
            <ChevronDown className={`transform transition-transform ${statesOpen ? 'rotate-180' : ''}`} />
          </button>
          {statesOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border  shadow-lg max-h-60 overflow-auto">
              {states.map((state) => (
                <div
                  key={state.value}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => {
    e.stopPropagation();
    toggleState(state.value);
  }}
                >
                  <div className="w-4 h-4 border rounded mr-2 flex items-center justify-center">
                    {formData.states.includes(state.value) && <Check size={14} />}
                  </div>
                  {state.label}
                </div>
              ))}
            </div>
          )}
          </div>
          {formErrors.states && (
            <span className="text-red-500 text-sm mt-1">{formErrors.states}</span>
          )}
        </div>

       

      
<div className="relative" >
  <label className="block label_input">
    Services interested in<span className="text-red-500">*</span>
  </label>
  <div  ref={servicesRef}>
  <button
    type="button"
    onClick={() => setServicesOpen(!servicesOpen)}
    className="w-full p-2 border min40 flex justify-between items-center bg-white"
   
  >
    <span class="fade-text">{formData.services.length ? `${formData.services.length} services selected` : 'Select Multiple Services'}</span>
    <ChevronDown className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
  </button>
  {servicesOpen && (
    <div className="absolute z-10 w-full mt-1 bg-white border shadow-lg max-h-60 overflow-auto">
      {services.map((service) => (
        <div
          key={service.value}
          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => toggleService(service.value)}
        >
          <div className="w-4 h-4 border rounded mr-2 flex items-center justify-center">
            {service.value === 'all' 
              ? formData.services.length === services.length - 1 && <Check size={14} />
              : formData.services.includes(service.value) && <Check size={14} />
            }
          </div>
          {service.label}
        </div>
      ))}
    </div>
  )}
  </div>
  {formErrors.services && (
    <span className="text-red-500 text-sm mt-1">{formErrors.services}</span>
  )}
</div>
</div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Specialties Dropdown */}
        <div className="relative" >
          <label className="block label_input">
            Specialty Type<span className="text-red-500">*</span>
          </label>
          <div  ref={specialtiesRef}>
          <button
            type="button"
            onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
            className="w-full p-2 border  min40 flex justify-between items-center bg-white"
            
          >
            <span class="fade-text">{formData.specialties.length ? `${formData.specialties.length} specialties selected` : 'Select Multiple Specialties'}</span>
            <ChevronDown className={`transform transition-transform ${specialtiesOpen ? 'rotate-180' : ''}`} />
          </button>
          {specialtiesOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border  shadow-lg max-h-60 overflow-auto">
              {specialties.map((specialty) => (
                <div
                  key={specialty.value}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => toggleSpecialty(specialty.value)}
                >
                  <div className="w-4 h-4 border rounded mr-2 flex items-center justify-center">
                    {formData.specialties.includes(specialty.value) && <Check size={14} />}
                  </div>
                  {specialty.label}
                </div>
              ))}
            </div>
          )}
          </div>
          {formErrors.specialties && (
            <span className="text-red-500 text-sm mt-1">{formErrors.specialties}</span>
          )}
        </div>
   
   
   
       {/* Annual Revenue Dropdown */}
<div className="relative" ref={revenueRef}>
  <label className="block label_input">
    Annual Revenue<span className="text-red-500">*</span>
  </label>
  <div   ref={revenueRef}>
  <button
    type="button"
    id="annualRevenue"
    onClick={() => setRevenueOpen(!revenueOpen)}
    className="w-full p-2 border min40 flex justify-between items-center bg-white"
   
  >
    <span class="fade-text">
      {formData.annualRevenue 
        ? revenueOptions.find(opt => opt.value === formData.annualRevenue)?.label 
        : 'Select Annual Revenue'}
    </span>
    <ChevronDown className={`transform transition-transform ${revenueOpen ? 'rotate-180' : ''}`} />
  </button>
  {revenueOpen && (
    <div className="absolute z-10 w-full mt-1 bg-white border shadow-lg max-h-60 overflow-auto">
      {revenueOptions.map((option) => (
        <div
          key={option.value}
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            setFormData({...formData, annualRevenue: option.value});
            setRevenueOpen(false);
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  )}
  </div>
  {formErrors.annualRevenue && (
    <span className="text-red-500 text-sm mt-1">{formErrors.annualRevenue}</span>
  )}
</div>
</div>


      {/* Comments */}
      <div className="flex flex-col tw-mb-5">
        <label htmlFor="comments" className="label_input">Let us know how we can help</label>
        <textarea
          id="comments"
          value={formData.comments}
          onChange={(e) => setFormData({...formData, comments: e.target.value})}
          className="w-full p-2 border rounded h-24"
        />
      </div>

      {/* Submit Button */}
      <div class="tw-w-full tw-flex tw-flex-row tw-justify-center">
      <button
        type="submit"
        disabled={submitStatus === 'submitting'}
        className="tw-w-330 tw-mx-auto  shine-button  py-3 px-4 "
        
      >
        {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </button>
      </div>

      <div class="tw-w-full tw-flex tw-flex-row tw-justify-center p-2">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="text-black">Form submitted successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="text-red-600">Error submitting form. Please try again.</div>
      )}
      </div>
    </form>
  </div>
  </div>
  );
};

export default MultiSelectForm;