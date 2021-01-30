import React from 'react';
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './Carousels.css';

import Testimonial from '../Testimonial/Testimonial';
import reviews from '../../data/Reviews';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Carousels = () => {
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const renderReview = reviews.map(
    ({ clientName, clientCompany, comments }, i) => {
      return (
        <SwiperSlide key={i}>
          <Testimonial
            clientName={clientName}
            clientCompany={clientCompany}
            comments={comments}
          />
        </SwiperSlide>
      );
    }
  );

  return (
    <Swiper spaceBetween={50} navigation slidesPerView={screenSmall ? 1 : 2}>
      {renderReview}
    </Swiper>
  );
};

export default Carousels;
