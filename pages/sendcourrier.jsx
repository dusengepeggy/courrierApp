import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import tailwind from 'twrnc';
import InputTextCompont from '../components/inputTextCompont';
import ButtonComponent from '../components/button';

const labels = ["Dispatcher", "Destination", "Package", "Courier Ticket"];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0891b2',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0891b2',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0891b2',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0891b2',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#0891b2',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 12,
  currentStepLabelColor: '#0891b2'
};

function Sendcourrier() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    senderPhone: '',
    senderName: '',
    senderEmail: '',
    senderId: '',
    branch: '',
    receiverPhone: '',
    receiverName: '',
    receiverEmail: '',
    receiverId: '',
    packageName: '',
    packageCategory: '',
    weight: '',
    dimensions: '',
    value: '',
    description: '',
    driver: '',
    vehicle: '',
    travelTime: '',
    amountPaid: ''
  });

  const handleNextStep = () => {
    if (currentStep < labels.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    Alert.alert('Form Submitted!', JSON.stringify(formData));
  };

  return (
    <View style={tailwind`flex-1 p-4 bg-white`}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentStep}
        labels={labels}
        stepCount={4}
      />
      {currentStep === 0 && (
        <View style={tailwind`mt-8 flex gap-4 p-2`}>
          <Text style={tailwind`text-lg font-bold text-[#0891b2]`}>Sender</Text>
          <View style={tailwind`border border-gray-400 p-2 rounded`}>
            <InputTextCompont label={'Phonenumber'} name="senderPhone" value={formData.senderPhone} onChangeText={handleChange} />
            <InputTextCompont label={'Fullname'} name="senderName" value={formData.senderName} onChangeText={handleChange} />
            <InputTextCompont label={'Email'} name="senderEmail" value={formData.senderEmail} onChangeText={handleChange} />
            <InputTextCompont label={'Id number(optional)'} name="senderId" value={formData.senderId} onChangeText={handleChange} />
          </View>

          <ButtonComponent name="Next" action={handleNextStep} />
        </View>
      )}
      {currentStep === 1 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tailwind`mt-8 flex gap-4 p-2`}>
            <Text style={tailwind`text-lg font-bold text-[#0891b2]`}>Destination</Text>
            <View style={tailwind` border border-gray-400 p-2 rounded`}>
              <InputTextCompont label={'Branch'} name="branch" value={formData.branch} onChangeText={handleChange} />
            </View>
            <Text style={tailwind`text-lg font-bold text-[#0891b2]`}>Receiver</Text>
            <View style={tailwind` border border-gray-400 p-2 rounded mb-18`}>
              <InputTextCompont label={'Phonenumber'} name="receiverPhone" value={formData.receiverPhone} onChangeText={handleChange} />
              <InputTextCompont label={'Fullname'} name="receiverName" value={formData.receiverName} onChangeText={handleChange} />
              <InputTextCompont label={'Email'} name="receiverEmail" value={formData.receiverEmail} onChangeText={handleChange} />
              <InputTextCompont label={'Id number(Optional)'} name="receiverId" value={formData.receiverId} onChangeText={handleChange} />
              <View style={tailwind`flex-row justify-between`}>
                <Pressable onPress={handlePrevStep} style={tailwind`bg-[#0891b2] py-[8px] px-4 rounded`}><Text style={tailwind`text-white`}>Preview</Text></Pressable>
                <Pressable onPress={handleNextStep} style={tailwind`bg-[#0891b2] py-[8px] px-4 rounded`}><Text style={tailwind`text-white`}>Next</Text></Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      {currentStep === 2 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tailwind`mt-8 flex gap-4 p-2`}>
            <Text style={tailwind`text-lg font-bold text-[#0891b2]`}>Package details</Text>
            <View style={tailwind` border border-gray-400 p-2 rounded mb-18`}>
              <InputTextCompont label={'Package name'} name="packageName" value={formData.packageName} onChangeText={handleChange} />
              <InputTextCompont label={'Package category'} name="packageCategory" value={formData.packageCategory} onChangeText={handleChange} />
              <InputTextCompont label={'Weight'} name="weight" value={formData.weight} onChangeText={handleChange} />
              <InputTextCompont label={'Package Dimensions'} name="dimensions" value={formData.dimensions} onChangeText={handleChange} />
              <InputTextCompont label={'Value'} name="value" value={formData.value} onChangeText={handleChange} />
              <InputTextCompont label={'Description or delivery instructions'} name="description" value={formData.description} onChangeText={handleChange} />
              <View style={tailwind`flex-row justify-between`}>
                <Pressable onPress={handlePrevStep} style={tailwind`bg-[#0891b2] py-[8px] px-4 rounded`}><Text style={tailwind`text-white`}>Preview</Text></Pressable>
                <Pressable onPress={handleNextStep} style={tailwind`bg-[#0891b2] py-[8px] px-4 rounded`}><Text style={tailwind`text-white`}>Next</Text></Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      {currentStep === 3 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tailwind`mt-8 flex gap-4 p-2`}>
            <Text style={tailwind`text-lg font-bold text-[#0891b2]`}>Courier Ticket details</Text>
            <View style={tailwind`border border-gray-400 p-2 rounded mb-18`}>
              <InputTextCompont label={'Driver'} name="driver" value={formData.driver} onChangeText={handleChange} />
              <InputTextCompont label={'Vehicle / Bus'} name="vehicle" value={formData.vehicle} onChangeText={handleChange} />
              <InputTextCompont label={'Travel Time'} name="travelTime" value={formData.travelTime} onChangeText={handleChange} />
              <InputTextCompont label={'Amount Paid'} name="amountPaid" value={formData.amountPaid} onChangeText={handleChange} />
              <View style={tailwind`flex-row justify-between`}>
                <Pressable onPress={handlePrevStep} style={tailwind`bg-[#0891b2] py-[8px] px-4 rounded`}><Text style={tailwind`text-white`}>Preview</Text></Pressable>
                <Pressable onPress={handleSubmit} style={tailwind`bg-[#0891b2] py-[8px] px-4 rounded`}><Text style={tailwind`text-white`}>Submit</Text></Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default Sendcourrier;
