import React, { useState } from "react";
import styles from "../../../styles/styles";
import '../LandingCss/waypaper.css'

const FAQPage = () => {
  return (
    <div style={{marginTop:"20vh"}}>
      <Faq />

    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const itemList=[
    {
      id:1,
      ques:'How do I contact customer support?',
      ans: ' If you re not satisfied with your purchase, we accept return within 30 days of delivery.To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why youre returning the item.'
    },
    {
      id: 2,
      ques: 'How do I contact customer support?',
      ans: ' If you re not satisfied with your purchase, we accept return within 30 days of delivery.To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why youre returning the item.'
    },
     {
      id:3,
      ques:'How do I contact customer support?',
      ans: ' If you re not satisfied with your purchase, we accept return within 30 days of delivery.To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why youre returning the item.'
    },
    {
      id: 4,
      ques: 'How do I contact customer support?',
      ans: ' If you re not satisfied with your purchase, we accept return within 30 days of delivery.To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why youre returning the item.'
    },
    {
      id: 5,
      ques: 'How do I contact customer support?',
      ans: ' If you re not satisfied with your purchase, we accept return within 30 days of delivery.To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why youre returning the item.'
    },
    {
      id: 6,
      ques: 'How do I contact customer support?',
      ans: ' If you re not satisfied with your purchase, we accept return within 30 days of delivery.To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why youre returning the item.'
    },

  ]


  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    
    <div className={`${styles.section} my-8`} style={{width:'90vw'}} >
      <div className="faq" >FAQs</div>
      <div className="mx-auto space-y-4">
        {
          itemList.map((item) => {
            return (<div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(item.id)}
              >
                <span className="text-lg font-medium text-gray-900">
                  What payment methods do you accept?
                </span>
                {activeTab === item.id ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {activeTab === item.id && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                    We accept visa,mastercard,paypal payment method also we have
                    cash on delivery system.
                  </p>
                </div>
              )}
            </div>)
          })
        }
        </div>
    </div>
  );
};

export default FAQPage;
