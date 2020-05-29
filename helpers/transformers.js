import get from 'lodash/get';
import { getFormattedDate, getTimeAgo } from '~/helpers/date';
import { formatNumber } from '~/helpers/number';

export const restaurantsList = (response) => {
  return response.map((item) => {
    const specializations = get(item, 'Specializations', []);
    const reviewsCount = get(item, 'ReviewsCount', 0);
    const positiveReviews = get(item, 'PositiveReviews', 0);
    const minCost = get(item, 'MinCost', 0);
    const deliveryCost = get(item, 'DeliveryCost', 0);
    const deliveryTime = get(item, 'DeliveryTime', 0);

    return {
      logo: get(item, 'Logo', ''),
      name: get(item, 'Name', ''),
      spec: specializations.map((spec) => (get(spec, 'Name', ''))),
      reviews: {
        count: formatNumber(reviewsCount),
        positive: parseInt(positiveReviews),
      },
      delivery: {
        minCost: formatNumber(minCost),
        cost: formatNumber(deliveryCost),
        time: parseInt(deliveryTime),
      },
    };
  });
};

export const reviewList = (response) => {
  return response.map((item) => {
    const commentDate = get(item, 'DateAdded', null);
    return {
      isPositive: get(item, 'IsPositive', false),
      userName: get(item, 'UserFIO', ''),
      restaurantName: get(item, 'RestaurantName', ''),
      comment: {
        text: get(item, 'Message', ''),
        date: commentDate ? getFormattedDate(commentDate) : '',
        ago: commentDate ? getTimeAgo(commentDate) : '',
      },
    };
  });
};

export const hitsList = (response) => {
  return response.map((item) => {
    const ProductPrice = get(item, 'ProductPrice', 0);
    return {
      image: get(item, 'ProductImage', ''),
      title: get(item, 'ProductName', ''),
      description: get(item, 'ProductDescription', ''),
      price: formatNumber(ProductPrice),
    };
  });
};
