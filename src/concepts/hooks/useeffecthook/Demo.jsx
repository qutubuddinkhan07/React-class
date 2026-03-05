import React, { useState, useEffect, useRef } from "react";

const Demo = () => {
  const [scrollData, setScrollData] = useState({
    scrollHeight: 0,
    clientHeight: 0,
    scrollTop: 0,
    scrollPercent: 0,
  });

  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);

  // Function to calculate scroll information
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

  // Update on scroll
  const handleScroll = () => {
    calculateScrollInfo();
  };

  // Initial calculation
  useEffect(() => {
    calculateScrollInfo();

    // Optional: Add resize observer to recalculate when window resizes
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
          <strong>clientHeight</strong> is the visible height of the container.
        </p>
        <p>
          <strong>scrollTop</strong> is the number of pixels scrolled from the
          top.
        </p>
      </div>

      {/* Scroll Metrics Display */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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

        <div
          style={{
            background: "#fff3e0",
            padding: "15px",
            borderRadius: "8px",
          }}
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
          <h4 style={{ margin: "0 0 10px 0" }}>Hidden Content</h4>
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
          <h4 style={{ margin: "0 0 10px 0" }}>Scroll Progress</h4>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {scrollData.scrollPercent.toFixed(1)}%
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            (scrollTop / hidden content)
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div
        style={{
          width: "100%",
          height: "8px",
          background: "#ddd",
          borderRadius: "4px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: `${scrollData.scrollPercent}%`,
            height: "100%",
            background: "#4CAF50",
            borderRadius: "4px",
            transition: "width 0.1s",
          }}
        />
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        style={{
          height: "300px",
          width: "100%",
          overflowY: "auto",
          border: "2px solid #2196f3",
          borderRadius: "8px",
          padding: "10px",
          position: "relative",
        }}
      >
        {/* Content inside scrollable area */}
        <div ref={contentRef} style={{ padding: "10px" }}>
          {/* Generate some content to make it scrollable */}
          <h3>Scrollable Content Area</h3>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              style={{
                padding: "20px",
                margin: "10px 0",
                background: item % 2 === 0 ? "#bbdefb" : "#ffe0b2",
                borderRadius: "4px",
              }}
            >
              <h4>Section {item}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontSize: "12px", color: "#666" }}>
                Height contribution: 20px padding + content height
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Explanation */}
      <div
        style={{
          marginTop: "20px",
          background: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          fontSize: "14px",
        }}
      >
        <h4>How it works:</h4>
        <ul>
          <li>
            <strong>scrollHeight ({scrollData.scrollHeight}px):</strong> Total
            height of all content
          </li>
          <li>
            <strong>clientHeight ({scrollData.clientHeight}px):</strong> Visible
            height of the container
          </li>
          <li>
            <strong>scrollTop ({scrollData.scrollTop}px):</strong> Current
            scroll position from top
          </li>
          <li>
            Hidden content: {scrollData.scrollHeight - scrollData.clientHeight}
            px (scrollHeight - clientHeight)
          </li>
          <li>
            You need to scroll{" "}
            {scrollData.scrollHeight - scrollData.clientHeight}px to see all
            content
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Demo;
