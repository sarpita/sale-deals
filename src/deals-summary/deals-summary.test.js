import {render} from '@testing-library/react';
import DealsSummary from "./index";
import React from "react";
import {useSelector} from 'react-redux';

const dealsMock = [
  {
    "cause": "Science",
    "items": [
      {
        "key": "c51cebc50bb0c5bc712efb127b7bd61b",
        "title": "Make your website's home page look good on small devices",
        "price": 50000,
        "cause": {
          "name": "Science"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/Screen_Shot_2017-09-20_at_10.26.55_AM_wxfxmg",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/Screen_Shot_2017-09-25_at_8.57.28_AM_pqe8p7",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/Screen_Shot_2017-09-25_at_8.57.38_AM_lkse6f"
        ]
      },
      {
        "key": "2092036b41a263b6750ba00b47b06ca7",
        "title": "1 hour Photoshoot session ",
        "price": 10000,
        "cause": {
          "name": "Science"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/JasminHurtado_084_01262018_lbswrx",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/13_bwdlln",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/DANNYIMG_002001262018_kpk6cf",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/IMG_0068_kkzkcy"
        ]
      },
      {
        "key": "ce221787bc244e5eb5b7de96db323a4c",
        "title": "Creative Brainstorming Session",
        "price": 50000,
        "cause": {
          "name": "Science"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/BrainStorm_nezbjt"
        ]
      }
    ],
    "total": 110000
  },
  {
    "cause": "Children's Rights",
    "items": [
      {
        "key": "72c5ab4dd5bd5531fe3cdaf65d1ae395",
        "title": "Basic Introduction to Javascript",
        "price": 2000,
        "cause": {
          "name": "Children's Rights"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/Selection_022_czmogy",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/vsc1_uu3ayr"
        ]
      }
    ],
    "total": 2000
  },
  {
    "cause": "Environment",
    "items": [
      {
        "key": "47ccf7763ef63b78774a4b24620126ed",
        "title": "3 Donut Bar Stools - 30\" Seat Height and Swivel",
        "price": 45000,
        "cause": {
          "name": "Environment"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/IMG_0647_bictyq"
        ]
      },
      {
        "key": "bb6aaf78c00b4d7ad67b27ff85635ac1",
        "title": "One Private Yin Yoga Lesson",
        "price": 15000,
        "cause": {
          "name": "Environment"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/static1.squarespace-2_rghb9c"
        ]
      },
      {
        "key": "1df540043347f5df38a3240342ada1c2",
        "title": "Thai Yoga Therapy - 7-Day Program",
        "price": 105000,
        "cause": {
          "name": "Environment"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/static1.squarespace-1_sx13zn"
        ]
      }
    ],
    "total": 165000
  },
];
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe('deals summary component ', () => {

  test('should show listing based on total sum by cause', async () => {
    useSelector.mockImplementation(() => (dealsMock))
    const {getAllByText, getByText, container} = render(<DealsSummary/>);
    console.log(container.innerHTML);
    expect(getByText('Deals summary - by total amount')).toBeInTheDocument();
    expect(getAllByText('3 deals').length).toBe(2);
    expect(getByText('1 deals')).toBeInTheDocument();
    expect(getByText('110000')).toBeInTheDocument();
    expect(getByText('Children\'s Rights')).toBeInTheDocument();
    expect(getByText('Science')).toBeInTheDocument();
    expect(getByText('2000')).toBeInTheDocument();
    expect(getByText('Environment')).toBeInTheDocument();
    expect(getByText('165000')).toBeInTheDocument();
  })
})
