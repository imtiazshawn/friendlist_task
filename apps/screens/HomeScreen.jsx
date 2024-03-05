import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      fetchEntry();
    }, []);

    const fetchEntry = async () => {
      try {
        const response = await fetch('https://api.publicapis.org/entries', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        setData(responseData.entries);
      } catch (error) {
        console.error('Error fetching entry:', error);
        setError('Failed to fetch data');
      }
    };

    return (
      <ScrollView className='py-8 mx-4 bg-white flex-1'>
        <View className='space-y-2'>
          <Text className='mt-2 ml-2 font-bold text-red-500 text-center'>Entries:</Text>
          {data.length > 0 ? (
            data.map((ent, index) => (
              <View key={index} className='w-full h-[30rem] bg-blue-50 border border-blue-200 rounded-lg px-2 py-2'>
                <Text className='font-semibold'>{ent.API}</Text>
                <Text>Description: {ent.Description}</Text>
                <Text>{ent.Category}</Text>
              </View>
            ))
          ) : (
            <Text>{error}</Text>
          )}
        </View>
      </ScrollView>
    );
}
