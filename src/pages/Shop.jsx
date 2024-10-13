import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Popular } from '../components/popular/Popular';
import { Offers } from '../components/offers/Offers';
import { NewCollections } from '../components/new_collections/NewCollections';
import { NewsLetter } from '../components/news_letter/NewsLetter';

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
