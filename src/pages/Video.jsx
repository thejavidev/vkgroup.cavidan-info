import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import FsLightbox from "fslightbox-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoaderContent from '../components/loader/LoaderContent';
import { Link } from 'react-router-dom';
import { getMultiLang as ml } from '../components/MultiLang';

const Video = React.memo(({ video }) => {
  const [t] = useTranslation("translation");

  const [loading, setLoading] = useState(false)
  const imagePerRow = 4;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);



  return (
    <>
      <div className="p-[20px] mt-[67px] bg-[--bg3] md:mt-[50px] w-full flex items-center justify-center">
        <h2 className='text-center font-[700] text-[25px] md:text-[20px] uppercase text-[--text] '>{t("footervideo")}</h2>
      </div>
      <div className="bg-[--bg] pt-[100px] pb-[100px] md:pt-[50px] min-h-[70vh] md:min-h-full pl-0 pr-0 relative">
        <Container>
          <Row>
            {
              video && video?.slice(0, next)?.map((item, i) => {
                return (
                  <Col key={i} lg={3} md={4} xs={6} className='mb-4'>
                    {
                      loading ? <LoaderContent /> :
                        <div className="overflow-hidden ">
                          <Link to={`${item?.slug_az}`}>
                            <LazyLoadImage src={item?.src} className='w-full' />
                          </Link>
                          <h3 className='font-[700] text-[25px] md:text-[18px] text-[--text] w-full pt-[20px] pb-[20px] pl-0 pr-0 m-0'>{ml(item?.title_az, item?.title_ru, item?.title_en)}</h3>
                        </div>
                    }

                  </Col>
                )
              })
            }
          </Row>
          {next < video?.length && (

            <Button onClick={handleMoreImage} className="bg-[#fff] max-w-max ml-3 border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
              {t("more2")}
            </Button>
          )}
        </Container>
      </div>
    </>
  )
})

export default Video
