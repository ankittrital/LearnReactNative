import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import FlatCard from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import BlogCard from './components/BlogCard';

/**
 * @author   Ankit D Trital
 * @function @App
 **/

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCard />
        <BlogCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
