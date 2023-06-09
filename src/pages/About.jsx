import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../components/MultiLang';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from 'react';
import { noPhoto } from '../assets';
import LoaderContent from '../components/loader/LoaderContent';


const About = React.memo(({ option }) => {
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [])
  return (
    <>
      <div className="p-[20px] mt-[67px] md:mt-[55px] bg-[--bg3] w-full flex items-center justify-center ">
        <h2 className='text-center font-[700] text-[25px] md:text-[16px] uppercase text-[--text] '>{t("about")}</h2>
      </div>
      <div className="bg-[--bg] relative mt-4 w-full pt-[100px] lg:pt-[50px] pb-[70px] pl-0 pr-0 md:pr-[20px] md:pl-[20px] min-h-[60vh]">
        <Container>
          <Row className="items-center">

            <Col lg={8} md={12}>

              {
                loading ? <LoaderContent /> :
                  <>
                    <p className="font-[700] text-[55px] lg:text-[40px] text-[--text] md:text-[30px]">{t("whowe")}</p>
                    <div className="font-[400] pt-[20px] text-justify text-[--text]" dangerouslySetInnerHTML={{ __html: option && ml(option?.biz_text_az, option?.biz_text_ru, option?.biz_text_en) }}>
                    </div>
                  </>
              }

            </Col>
            <Col lg={4} md={12}>
              {
                loading ? <LoaderContent /> :
                  <LazyLoadImage className="p-[20px] md:p-0 lg:w-full lg:mt-10 lg:p-[0]" src={option?.biz_img ? option?.biz_img : noPhoto} />
              }
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
})

export default About
