import React, { Component, Suspense } from "react";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";
import { useGLTF,OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model() {
  const { scene } = useGLTF("greentaweb.gltf");
  return <primitive object={scene} />;
}

export default function FeaturesHome() {
  return (
    <section className="payment_features_area">
      <div className="bg_shape shape_one"></div>
      <div className="bg_shape shape_two"></div>
      <div className="bg_shape shape_three"></div>
      <div className="container">
        <div className="row featured_item">
          <div className="col-lg-6">
            <Reveal effect="fadeInLeft">
              <div className="payment_featured_img">
                <img src={require("../img/home9/featured_img.png")} alt="" />
              </div>
            </Reveal>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center"
            style={{ marginTop: "-20%" }}
          >
            <Reveal effect="fadeInRight" duration={800} >
              <div className="payment_features_content pl_70">
                <h2>For Teams</h2>

                <p>
                  As a team you can engage in our cause and register your team
                  in order to join the Greenta league; your supporters are
                  waiting for you
                </p>
                <Link to="/service-team" className="btn_six slider_btn">
                  Service Details
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
        <div style={{ height: "100vh" }}>
          <Canvas camera={{ position: [10, 18, 23], fov: 60 }}>
          <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
                  <Suspense fallback={null}>
              <Model />
              <OrbitControls/>
            </Suspense>
          </Canvas>
        </div>
        <div className="row flex-row-reverse featured_item">
          <div className="col-lg-6">
            <Reveal effect="fadeInRight" duration={800}>
              <div className="payment_featured_img img_two">
                <img
                  src={require("../img/home9/featured_img.png")}
                  width="750"
                  height="650"
                />
              </div>
            </Reveal>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center"
            style={{ marginTop: "-20%" }}
          >
            <Reveal effect="fadeInLeft" duration={1200}>
              <div className="payment_features_content pr_70">
                <h2>For Supporters</h2>
                <p>
                  Join the cause and promote your team , your team is deppending
                  on you because you're the only player that matters in
                  Grennta's league
                </p>
                <Link to="/service-supporter" className="btn_six slider_btn">
                  Service Details
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="row featured_item">
          <div className="col-lg-6">
            <Reveal effect="fadeInLeft">
              <div className="payment_featured_img">
                <img src={require("../img/home9/featured_img.png")} alt="" />
              </div>
            </Reveal>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center"
            style={{ marginTop: "-20%" }}
          >
            <Reveal effect="fadeInRight" duration={800}>
              <div className="payment_features_content pl_70">
                <h2>For Collect centers</h2>

                <p>
                  As a team you can engage in our cause and register your team
                  in order to join the Greenta league; your supporters are
                  waiting for you
                </p>
                <Link to="/service-center" className="btn_six slider_btn">
                  Service Details
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
