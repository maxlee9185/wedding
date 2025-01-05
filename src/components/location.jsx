import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  useEffect(() => {
    const loadKakaoMap = () => {
      // 스크립트가 이미 로드되었는지 확인
      if (document.querySelector(".daum_roughmap_loader_script")) {
        resolve();
        return;
      }

      // 스크립트 동적 로드
      const script = document.createElement("script");
      script.charset = "UTF-8";
      script.src =
        "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
      script.className = "daum_roughmap_loader_script";
      script.async = true;
      script.onload = () => {
        initializeMap();
      };
      document.body.appendChild(script);
    };

    const initializeMap = () => {
      // 카카오 맵 초기화
      new window.daum.roughmap.Lander({
        timestamp: "1736065659374", // 변경 가능
        key: "2mp5t", // 변경 가능
        mapWidth: "640",
        mapHeight: "360",
      }).render();
    };

    loadKakaoMap();
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1736065659374" // 맵 컨테이너 ID
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        서울특별시 강남구 논현로 645
        <br />
        호텔 엘리에나 3층 임페리얼홀
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        <br />
        간선 147, 463, 241 논현동고개(23119) 또는 논현고개(23146) 하차
        <br />
        지선 3412, 3414, 4211 논현동고개(23119) 또는 논현고개(23146) 하차
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        <br />
        7호선 학동역 4번 출구 (도보 4분)
        <br />
        9호선 언주역 2번 출구 (도보 7분)
      </Content>
    </Wrapper>
  );
};

export default Location;
