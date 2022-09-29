import React from 'react';
import cls from './Template.module.scss';
import Delivery from '../assets/deliveryTemp.svg';

const Template = () => {
   return (
      <div className={cls.template}>
         <Delivery />
         <h3> Template Page</h3>
      </div>
   );
};

export default Template;
