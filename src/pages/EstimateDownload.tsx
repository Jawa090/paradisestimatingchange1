import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  FileDown, 
  Laptop2,
  CheckCircle2,
  Mail,
  User,
  Building2,
  Download,
  ChevronRight
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { servicesData } from '@/data/services';

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
});

type FormValues = z.infer<typeof formSchema>;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const EstimateDownload = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceType: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast({
      title: "Sample Estimate Ready!",
      description: "Your estimate sample is being downloaded.",
      variant: "default",
    });
    
    setTimeout(() => {
      console.log("Form submitted:", data);
      const newTab = window.open('/lovable-uploads/ec2b02b7-5116-40cb-9910-2339c0af8848.png', '_blank');
      if (newTab) newTab.focus();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy-800">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto px-6"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Download Our <span className="text-gold">Professional</span> Estimate Sample
            </h1>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg mb-8">
              Get a comprehensive construction estimate sample to understand our detailed approach to cost analysis and project planning.
            </p>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
           
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form Column */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-xl p-8 shadow-2xl border border-gray-100 order-2 lg:order-1"
            >
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                <FileDown className="mr-2 text-gold" />
                Request Your Sample
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input className="pl-10" placeholder="John Doe" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input className="pl-10" placeholder="john@example.com" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input className="pl-10" placeholder="Your Company" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {servicesData.map((service) => (
                              <SelectItem key={service.id} value={service.title}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the service type most relevant to your project
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold text-white shadow-lg"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Sample Estimate
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
            
            {/* Laptop Display Column */}
            <div className="order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Realistic Laptop Frame */}
<div className="relative mx-auto w-full max-w-xl bg-transparent">
  {/* Laptop Frame */}
  <div className="relative bg-gray-800 rounded-t-xl border-t-8 border-gray-700 shadow-2xl overflow-hidden">
    
    {/* Screen Area */}
    <div className="bg-white m-1 rounded-t-lg h-64 overflow-hidden relative">
      
      {/* Browser Chrome (Top Controls) */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-200 flex items-center px-2 z-10 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-gray-600 truncate">
          Sample_Estimate.pdf
        </div>
      </div>

      {/* Image inside screen */}
      <img
        src="/lovable-uploads/ec2b02b7-5116-40cb-9910-2339c0af8848.png"
        alt="Estimate Preview"
        className="w-full h-full object-cover mt-8"
      />
    </div>
  </div>

  {/* Laptop Base */}
  <div className="h-6 bg-gray-700 rounded-b-xl shadow-inner"></div>

  {/* Bottom Stand */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-b-md"></div>

  {/* Shine on screen */}
  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-xl"></div>
</div>
                
                
              </motion.div>
              
              {/* Features List */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="mt-16 space-y-6"
              >
                <h3 className="text-2xl font-bold text-navy flex items-center">
                  <Laptop2 className="mr-2 text-gold" />
                  What's Included?
                </h3>
                
                <motion.div variants={staggerContainer} className="space-y-4">
                  {[
                    {
                      title: "Detailed Line Items",
                      description: "Every cost component broken down with quantities and unit prices"
                    },
                    {
                      title: "Material Specifications",
                      description: "Comprehensive list of materials with exact specifications"
                    },
                    {
                      title: "Labor Calculations",
                      description: "Transparent breakdown of labor costs and time estimates"
                    },
                    {
                      title: "Cost Summary",
                      description: "Clear total cost projections with optional alternates"
                    }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-gold transition-all"
                    >
                      <CheckCircle2 className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-navy">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2"
          >
            {[
              {
                question: "How accurate are your estimates?",
                answer: "Our estimates typically fall within 5-10% of final costs, depending on project complexity and market conditions."
              },
              {
                question: "How long does it take to prepare a custom estimate?",
                answer: "Depending on project size and complexity, our team can deliver estimates within 3-10 business days."
              },
              {
                question: "What information do you need to provide an estimate?",
                answer: "Typically we need project plans, specifications, site conditions, project timeline, and any specific requirements."
              },
              {
                question: "Do you provide revisions to estimates?",
                answer: "Yes, we offer revisions as project details change or as you refine your requirements."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-navy mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Estimate?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our team of professional estimators is ready to provide detailed cost analysis for your specific project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold text-white shadow-lg"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy shadow-lg"
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default EstimateDownload;