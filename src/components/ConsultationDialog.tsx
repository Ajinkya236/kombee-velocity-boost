
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ConsultationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationDialog = ({ isOpen, onClose }: ConsultationDialogProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    projectNeeds: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    navigate('/success');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="sm:max-w-md"
        style={{ backgroundColor: '#d8cdce', border: '1px solid #171311' }}
      >
        <DialogHeader>
          <DialogTitle
            className="text-2xl mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '900',
              color: '#171311'
            }}
          >
            Get Started with Kombee
          </DialogTitle>
        </DialogHeader>
        
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="h-12"
              style={{
                borderColor: '#171311',
                backgroundColor: 'white',
                color: '#171311',
                fontFamily: 'Inter, sans-serif'
              }}
              required
            />
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="h-12"
              style={{
                borderColor: '#171311',
                backgroundColor: 'white',
                color: '#171311',
                fontFamily: 'Inter, sans-serif'
              }}
              required
            />
          </div>
          
          <Input
            type="email"
            placeholder="Work Email"
            value={formData.workEmail}
            onChange={(e) => handleInputChange('workEmail', e.target.value)}
            className="h-12"
            style={{
              borderColor: '#171311',
              backgroundColor: 'white',
              color: '#171311',
              fontFamily: 'Inter, sans-serif'
            }}
            required
          />
          
          <Input
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className="h-12"
            style={{
              borderColor: '#171311',
              backgroundColor: 'white',
              color: '#171311',
              fontFamily: 'Inter, sans-serif'
            }}
            required
          />
          
          <Textarea
            placeholder="Tell us about your project and team needs..."
            value={formData.projectNeeds}
            onChange={(e) => handleInputChange('projectNeeds', e.target.value)}
            className="min-h-[100px]"
            style={{
              borderColor: '#171311',
              backgroundColor: 'white',
              color: '#171311',
              fontFamily: 'Inter, sans-serif'
            }}
            required
          />
          
          <Button
            type="submit"
            size="lg"
            className="w-full text-lg group"
            style={{
              backgroundColor: '#171311',
              color: '#d8cdce',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Consult Now
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
