import React, { useState } from "react";
import TestCard from "../components/TestCard";
import MySelect from "../components/UI/select/MySelect";

function Tests({ tests, sortTests, selectedSort }) {
  return (
    <section className="tests">
      <div className="conteiner">
        <div className="tests__inner">
          <h1 className="tests__title">Тесты</h1>
          <div className="tests__filter">
            {/* <MySelect
              value={selectedSort}
              onChange={sortTests}
              defaultValue="УПОРЯДОЧИТЬ"
              options={[{ value: "likes", name: "По оценкам" }]}
            /> */}
          </div>
          <div className="tests__tests-cards">
            {tests.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tests;
