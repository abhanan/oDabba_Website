import React from 'react';
import DishCard from "./Cards/DishCard"
export default () => {
  return (
    <div>
      <ul className="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="pills-monday-tab" data-toggle="pill" href="#pills-monday" role="tab" aria-controls="pills-home" aria-selected="true">Monday</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-tuesday-tab" data-toggle="pill" href="#pills-tuesday" role="tab" aria-controls="pills-profile" aria-selected="false">Tuesday</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-wednesday-tab" data-toggle="pill" href="#pills-wednesday" role="tab" aria-controls="pills-contact" aria-selected="false">Wednesday</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-thursday-tab" data-toggle="pill" href="#pills-thursday" role="tab" aria-controls="pills-contact" aria-selected="false">Thursday</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-friday-tab" data-toggle="pill" href="#pills-friday" role="tab" aria-controls="pills-contact" aria-selected="false">Friday</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-saturday-tab" data-toggle="pill" href="#pills-saturday" role="tab" aria-controls="pills-contact" aria-selected="false">Saturday</a>
  </li>
</ul>

<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-monday" role="tabpanel" aria-labelledby="pills-monday-tab">
  <div className="container">
  <div className="row">

<div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
  <div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
</div>
</div>
</div>

 <div className="tab-pane fade" id="pills-tuesday" role="tabpanel" aria-labelledby="pills-tuesday-tab">
  <div className="container">
  <div className="row">

  <div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
  <div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
</div>
</div>
</div>
<div className="tab-pane fade" id="pills-wednesday" role="tabpanel" aria-labelledby="pills-wednesday-tab">
  <div className="container">
  <div className="row">

<div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
  <div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
</div>
</div>
</div>
<div className="tab-pane fade" id="pills-thursday" role="tabpanel" aria-labelledby="pills-thursday-tab">
  <div className="container">
  <div className="row">

<div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
  <div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
</div>
</div>
</div>
<div className="tab-pane fade" id="pills-friday" role="tabpanel" aria-labelledby="pills-friday-tab">
  <div className="container">
  <div className="row">

<div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
  <div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
</div>
</div>
</div>
<div className="tab-pane fade" id="pills-saturday" role="tabpanel" aria-labelledby="pills-saturday-tab">
  <div className="container">
  <div className="row">

<div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
  <div className="col-sm-6">
  <DishCard title="Any Dish" description="Any Dish made using some ingredients. And yes its tasty." />
  </div>
</div>
</div>
</div>
</div>
    </div>
  )
}
