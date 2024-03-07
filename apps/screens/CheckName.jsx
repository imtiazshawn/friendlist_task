import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';

const CheckName = () => {
  const [check, setCheck] = useState(false);
  const [info, setInfo] = useState([]);

  const handleFacebookLogin = async () => {
    const token = 'EAAEh34UaLOUBOZC00SV9ezqAY4DdNZAMxQDJTqNiCTRUHa4mFQkP78ZCXyiMBZB1LXcchcnHx0kblenO0QgUJ3F1urHjNWYcxTPnDCklgm3WPBsrSGg3D7iU942ckmJ1GPZCzb1Hw2ZClaMB6R1K8XUYuNoVhU04ywOBVTZBJTK8beuAEysJf7yXi0ROUZBbckmsrQA8AlQG5GINTGAWs5pUIFAJl7wHMEin5esVYZBDAM7odigWSdjK5';
    try {
      const response = await fetch(`https://graph.facebook.com/me?fields=id,name,friends,birthday,gender&access_token=${token}`);
      const data = await response.json();
      if (!response.ok) {
        Alert.alert('There is nothing we can do!')
      } else {
        setCheck(true);
        setInfo(data);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleBack = () => {
    setCheck(false);
  }

  return (
    <View className='h-full flex justify-center items-center'>
      {check === false ? (
        <TouchableOpacity className='bg-[#3498db] p-2 m-2' onPress={handleFacebookLogin}>
          <Text className='text-white font-bold text-lg'>Check Your Facebook Info</Text>
        </TouchableOpacity>
      ) : (
        <CheckOutput data={info} handleBack={handleBack} />
      )}
    </View>
  );
};

export default CheckName;

const CheckOutput = ({ data, handleBack }) => {
  return (
    <View className="flex flex-col p-6">
      <Text className="text-lg font-bold text-blue-500 mb-4">Facebook Personal Data</Text>
      <View className="flex flex-row items-center mb-2">
        <Text className="font-bold mr-2">ID:</Text>
        <Text className="text-xl">{data && data.id}</Text>
      </View>
      <View className="flex flex-row items-center mb-2">
        <Text className="font-bold mr-2">Name:</Text>
        <Text className="text-xl">{data && data.name}</Text>
      </View>
      <View className="flex flex-row items-center">
        <Text className="font-bold mr-2">Total Friends:</Text>
        <Text className="text-xl">{data.friends && data.friends.summary.total_count}</Text>
      </View>
      <View className="flex flex-row items-center">
        <Text className="font-bold mr-2">Birthday:</Text>
        <Text className="text-xl">{data && data.birthday}</Text>
      </View>
      <View className="flex flex-row items-center">
        <Text className="font-bold mr-2">Gender:</Text>
        <Text className="text-xl">{data && data.gender}</Text>
      </View>
      <TouchableOpacity onPress={handleBack} className="bg-blue-500 py-2 px-4 rounded-lg mt-6">
        <Text className="text-white font-bold text-center">Back</Text>
      </TouchableOpacity>
      <View className='mt-8'>
        <Text className='text-slate-500'>Hey {data.name}, Now Meta not permitted to use user friendlist. We just show you the information what facebook permit.</Text>
      </View>
    </View>
  )
}