import * as React from "react";
import { Link } from "gatsby";

function testPage() {
  return (
    <main>
      <title> 테스트 페이지</title>
      <h1> 테스트 페이지입니다.</h1>
      <Link to="/about"></Link>
    </main>
  );
}
export default testPage;
