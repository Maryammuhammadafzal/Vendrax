import slideImage1 from "../assets/images/slide2.jpg"

const slides = [
        {
          title: "Build A Trustworthy Customer Relationship",
          description:
            "Vendrax, your gateway to maximizing revenue through our ISO/Reseller Program. As an ISO, you can leverage our industry expertise and robust infrastructure to focus solely on sales while we handle all post-sale services.",
          backgroundImage: {slideImage1},
          listItems: [
            "Apparel Stores",
            "Food & Beverage Wholesalers",
            "Electronic Retailers",
            "Auto Repair Shops",
          ],
          button: {
            text: "Get Started",
            link: "javascript:",
            popup: true,
          },
        },
        {
          title: "Partner with Vendrax Earn Rewards and Revenue",
          description:
            "Join our partnership programs and start earning today! Whether you refer clients, become an authorized agent, or partner as an ISO reseller, Vendrax offers lucrative opportunities for you to earn incentives and revenue shares. Explore our flexible partnership options tailored to maximize your earnings and grow your business with us.",
          backgroundImage: {slideImage1},
          listItems: [],
          button: {
            text: "Submit Referral",
            link: "https://www.vendrax.com/submit-referral/",
            popup: false,
          },
        },
      ];

      export default slides