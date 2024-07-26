import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import tailwind from 'twrnc';


const labels = ["Step 1", "Step 2", "Step 3"];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
};

function Sendcourrier() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
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
      // Submit form data
      console.log(formData);
      alert('Form Submitted!');
    };
  
    return (
      <View style={tailwind`flex-1 p-4 bg-white`}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentStep}
          labels={labels}
        />
        {currentStep === 0 && (
          <View style={tailwind`mt-8`}>
            <Text style={tailwind`text-lg`}>Name:</Text>
            <TextInput
              style={tailwind`border p-2 mt-2 mb-4`}
              placeholder="Enter your name"
              value={formData.name}
              onChangeText={(text) => handleChange('name', text)}
            />
            <Button title="Next" onPress={handleNextStep} />
          </View>
        )}
        {currentStep === 1 && (
          <View style={tailwind`mt-8`}>
            <Text style={tailwind`text-lg`}>Email:</Text>
            <TextInput
              style={tailwind`border p-2 mt-2 mb-4`}
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
            />
            <View style={tailwind`flex-row justify-between`}>
              <Button title="Previous" onPress={handlePrevStep} />
              <Button title="Next" onPress={handleNextStep} />
            </View>
          </View>
        )}
        {currentStep === 2 && (
          <View style={tailwind`mt-8`}>
            <Text style={tailwind`text-lg`}>Password:</Text>
            <TextInput
              style={tailwind`border p-2 mt-2 mb-4`}
              placeholder="Enter your password"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => handleChange('password', text)}
            />
            <View style={tailwind`flex-row justify-between`}>
              <Button title="Previous" onPress={handlePrevStep} />
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        )}
      </View>
  
    )
}
export default Sendcourrier
