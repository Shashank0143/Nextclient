"use client";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "@/Components/ProductItem";
import HomeCat from "@/Components/HomeCat";

import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { MyContext } from "@/context/ThemeContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { fetchDataFromApi } from "@/utils/api";
import HomeBanner from "@/Components/HomeBanner";
import Image from "next/image";

import homeBannerPlaceholder from "../assets/images/homeBannerPlaceholder.jpg";
import Banners from "@/Components/banners";
import Head from "next/head";
import MetaData from "@/Metadata";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [selectedCat, setselectedCat] = useState();
  const [filterData, setFilterData] = useState([]);
  const [homeSlides, setHomeSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [value, setValue] = React.useState(0);

  const [bannerList, setBannerList] = useState([]);
  const [randomCatProducts, setRandomCatProducts] = useState([]);
  const [homeSideBanners, setHomeSideBanners] = useState([]);
  const [homeBottomBanners, setHomeBottomBanners] = useState([]);


  const context = useContext(MyContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectCat = (cat) => {
    setselectedCat(cat);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setselectedCat(context.categoryData[0]?.name);

    const location = localStorage.getItem("location");
    if (location !== null && location !== "" && location !== undefined) {
      fetchDataFromApi(`/api/products/featured?location=${location}`).then(
        (res) => {
          setFeaturedProducts(res);
        }
      );

      fetchDataFromApi(
        `/api/products?page=1&perPage=12&location=${location}`
      ).then((res) => {
        const sortedProducts = res.products.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setProductsData({ ...res, products: sortedProducts });
      });
    } else {
      // setselectedCountry("All");
      localStorage.setItem("location", "All");
    }

    fetchDataFromApi("/api/homeBanner").then((res) => {
      setHomeSlides(res);
    });

    fetchDataFromApi("/api/banners").then((res) => {
      setBannerList(res);
    });

    fetchDataFromApi("/api/homeSideBanners").then((res) => {
      setHomeSideBanners(res);
    });

    fetchDataFromApi("/api/homeBottomBanners").then((res) => {
      setHomeBottomBanners(res);
    });


  }, []);

  useEffect(() => {
    if (context.categoryData[0] !== undefined) {
      setselectedCat(context.categoryData[0].name);
    }


    if (context.categoryData?.length !== 0) {
      const randomIndex = Math.floor(
        Math.random() * context.categoryData.length
      );


      fetchDataFromApi(
        `/api/products/catId?catId=${context.categoryData[randomIndex]?.id
        }&location=${localStorage.getItem("location")}`
      ).then((res) => {
        setRandomCatProducts({
          catName: context.categoryData[randomIndex]?.name,
          catId: context.categoryData[randomIndex]?.id,
          products: res?.products,
        });
      });
    }
  }, [context.categoryData]);

  useEffect(() => {
    if (selectedCat !== undefined) {
      setIsLoading(true);
      const location = localStorage.getItem("location");
      fetchDataFromApi(
        `/api/products/catName?catName=${selectedCat}&location=${location}`
      ).then((res) => {
        setFilterData(res.products);
        setIsLoading(false);
        // console.log(selectedCat)
      });
    }
  }, [selectedCat]);

  return (
    <>
      <MetaData title={"Shop Designer & Trending Suits online | P&H BY PRIYANSHU"} description={"P&H by Priyanshu would be your one stop store to buy professional, Designer & trending suits online, for men's & women's both. Visit the site & get new offers."} 
      link="https://phbypriyanshu.com/" keywords={"Best Designer, Noida best designer, Fashion Designer, Formal dress, Blazers"}/>
      <div className="marginTop"></div>
      {homeSlides?.length !== 0 ? (
        <HomeBanner data={homeSlides} />
      ) : (
        <div className="container mt-3">
          <div className="homeBannerSection">
            <Image
              src={homeBannerPlaceholder}
              className="w-100"
              width={1000}
              height={500}
              style={{ height: "auto" }}
              alt="placeholder"
            />
          </div>
        </div>
      )}

      {context.categoryData?.length !== 0 && (
        <HomeCat catData={context.categoryData} />
      )}

      <section className="homeProducts">
        <div className="container">
          <div className="row homeProductsRow">
            <div className="col-md-3">
              <div className="sticky">
                {homeSideBanners?.length !== 0 &&
                  homeSideBanners?.map((item, index) => {
                    return (
                      <div className="banner mb-3" key={index}>
                        {item?.subCatId !== null ? (
                          <Link
                            href={`/category/subCat/${item?.subCatId}`}
                            className="box"
                          >
                            <Image
                              src={item?.images[0]}
                              className="w-100 transition"
                              alt="banner img"
                              layout="responsive"
                              width={0}
                              height={0}
                            />
                          </Link>
                        ) : (
                          <Link
                            href={`/category/${item?.catId}`}
                            className="box"
                          >
                            <Image
                            layout="responsive"
                            width={0}
                            height={0}
                              src={item?.images[0]}
                              className="cursor w-100 transition"
                              alt="banner img"
                            />
                          </Link>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center res-flex-column">
              </div>

              <div className="d-flex align-items-center mt-2">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Latest Products</h3>
                  <p className="text-light text-sml mb-0">
                    Shop Our Customize suits designs in your size
                  </p>
                </div>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex productScroller ml-0 mr-0">
                {productsData?.products?.length === 0 && (
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "600px" }}
                  >
                    <CircularProgress />
                  </div>
                )}

                {productsData?.products?.length !== 0 &&
                  productsData?.products
                    ?.slice(0)
                    .reverse()
                    .map((item, index) => {
                      return <ProductItem key={index} item={item} />;
                    })}
              </div>


              {bannerList?.length !== 0 && (
                <Banners data={bannerList} col={3} />
              )}

              <div className="d-flex align-items-center mt-4">
                <div className="info">
                  <h3 className="mb-0 hd">Designers&apos;s Choice</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers.
                  </p>
                </div>
              </div>

              {featuredProducts?.length === 0 && (
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "300px" }}
                >
                  <CircularProgress />
                </div>
              )}

              <div className="product_row w-100 mt-2">
                {context.windowWidth > 992 ? (
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={context.windowWidth > 992 ? 3 : 1}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      400: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },
                      600: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                      },
                      750: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                    }}
                  >
                    {featuredProducts?.length !== 0 &&
                      featuredProducts
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <ProductItem item={item} />
                            </SwiperSlide>
                          );
                        })}
                    <SwiperSlide style={{ opacity: 0 }}>
                      <div className={`productItem`}></div>
                    </SwiperSlide>
                  </Swiper>
                ) : (
                  <div className="productScroller">
                    {featuredProducts?.length !== 0 &&
                      featuredProducts
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return <ProductItem item={item} key={index} />;
                        })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {bannerList?.length !== 0 && (
            <Banners data={homeBottomBanners} col={3} />
          )}


        </div>
      </section>



      <div className="container">
        {randomCatProducts?.length !== 0 && (
          <>
            <div className="d-flex align-items-center mt-1 pr-3">
              <div className="info">
                <h3 className="mb-0 hd">{randomCatProducts?.catName}</h3>
                <p className="text-light text-sml mb-0">
                  Do not miss the current offers.
                </p>
              </div>

              <Link
                href={`/category/${randomCatProducts?.catId}`}
                className="ml-auto"
              >
                <Button className="viewAllBtn">
                  View All <IoIosArrowRoundForward />
                </Button>
              </Link>
            </div>

            {randomCatProducts?.length === 0 ? (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "300px" }}
              >
                <CircularProgress />
              </div>
            ) : (
              <div className="product_row w-100 mt-2">
                {context.windowWidth > 992 ? (
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={context.windowWidth > 992 ? 3 : 1}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      400: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },
                      600: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      750: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                      },
                    }}
                  >
                    {randomCatProducts?.length !== 0 &&
                      randomCatProducts?.products
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <ProductItem item={item} />
                            </SwiperSlide>
                          );
                        })}

                    <SwiperSlide style={{ opacity: 0 }}>
                      <div className={`productItem`}></div>
                    </SwiperSlide>
                  </Swiper>
                ) : (
                  <div className="productScroller">
                    {randomCatProducts?.length !== 0 &&
                      randomCatProducts?.products
                        ?.slice(0)
                        ?.reverse()
                        ?.map((item, index) => {
                          return <ProductItem item={item} key={index} />;
                        })}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>


    </>
  );
}
