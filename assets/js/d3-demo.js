// D3: tiny interactive bar chart
// Data
const data = [
  {label:"A", value:12},
  {label:"B", value:22},
  {label:"C", value:7},
  {label:"D", value:15},
  {label:"E", value:19}
];

const container = d3.select("#d3-chart");
const width = container.node().clientWidth;
const height = 220;
const margin = {top:16, right:12, bottom:28, left:28};

const svg = container.append("svg")
  .attr("width", width)
  .attr("height", height);

const x = d3.scaleBand()
  .domain(data.map(d => d.label))
  .range([margin.left, width - margin.right])
  .padding(0.2);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)]).nice()
  .range([height - margin.bottom, margin.top]);

svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x));

svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y).ticks(5));

const bars = svg.append("g")
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("x", d => x(d.label))
  .attr("y", d => y(d.value))
  .attr("width", x.bandwidth())
  .attr("height", d => y(0) - y(d.value))
  .attr("fill", "#6bdcff")
  .on("mouseenter", function(_, d){
    d3.select(this).attr("fill", "#b5ffe1");
  })
  .on("mouseleave", function(){
    d3.select(this).attr("fill", "#6bdcff");
  })
  .on("click", function(_, d){
    d.value = d.value + 1;
    d3.select(this)
      .transition().duration(200)
      .attr("y", y(d.value))
      .attr("height", y(0) - y(d.value));
  });
