import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [scrollData, setScrollData] = useState({
    scrollHeight: 0,
    clientHeight: 0,
    scrollTop: 0,
    scrollPercent: 0,
  });

  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);

  // function to calculate the scoll function
  const calculateScrollInfo = () => {
    if (scrollContainerRef.current) {
      const element = scrollContainerRef.current;
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;
      const scrollTop = element.scrollTop;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setScrollData({
        scrollHeight,
        clientHeight,
        scrollTop,
        scrollPercent: isNaN(scrollPercent) ? 0 : scrollPercent,
      });
    }
  };

  //update on scroll
  const handleScroll = () => {
    calculateScrollInfo();
  };

  //initial calculation
  useEffect(() => {
    calculateScrollInfo();

    // optional: add oberver to recalculate when window resize
    const resizeObserver = new ResizeObserver(() => {
      calculateScrollInfo();
    });

    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Scroll Height Demo</h2>

      {/* Explanation section */}
      <div
        style={{
          background: "#f0f0f0",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3>What is scrollHeight?</h3>
        <p>
          <strong>scrollHeight</strong> is the total height of the content,
          including content not visible on the screen.
        </p>
        <p>
          <strong>clientHeight</strong> is the visible height of the container
        </p>
        <p>
          <strong>scrollTop</strong> is the number of pixels scrolled from the
          top.
        </p>
      </div>

      {/* scroll metrics display */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#e3f2fd",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0" }}>Total Content Height</h4>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {scrollData.scrollHeight}px
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>(scrollHeight)</div>
        </div>
      </div>

      <div
        style={{ background: "#fff3e0", padding: "15px", borderRadius: "8px" }}
      >
        <h4 style={{ margin: "0 0 10px 0" }}>Visible Height</h4>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          {scrollData.clientHeight}px
        </div>
        <div style={{ fontSize: "12px", color: "#666" }}>(clientHeight)</div>
      </div>

      <div
        style={{
          background: "#e8f5e8",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <h4 style={{ margin: "0 0 10px 0" }}>Hidden content</h4>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          {scrollData.scrollHeight - scrollData.clientHeight}px
        </div>
        <div style={{ fontSize: "12px", color: "#666" }}>
          (scrollHeight - clientHeight)
        </div>
      </div>

      <div
        style={{
          background: "#f3e5f5",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <h4 style={{ margin: "0 0 10px 0" }}>Scroll progress</h4>
        <div>{scrollData}</div>
      </div>
    </div>
  );
};

export default Demo2;
