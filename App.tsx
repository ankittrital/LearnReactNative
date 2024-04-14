import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import FlatCard from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import BlogCard from './components/BlogCard';
import ContactList from './components/ContactList';

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
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
