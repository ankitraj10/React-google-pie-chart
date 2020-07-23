import React from "react";
import Chart from "react-google-charts";
import { render } from "@testing-library/react";
import Grid from "@material-ui/core/Grid";

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalData: {
        q1: { star0: 0, star1: 0, star2: 0, star3: 0, star4: 0, star5: 0 },
        q2: { star0: 0, star1: 0, star2: 0, star3: 0, star4: 0, star5: 0 },
        q3: { star0: 0, star1: 0, star2: 0, star3: 0, star4: 0, star5: 0 },
        q4: { star0: 0, star1: 0, star2: 0, star3: 0, star4: 0, star5: 0 },
      },
    };
  }
  starData = (id, value) => {
    var allData = {};
    var star = { star1: 0, star2: 0, star3: 0, star4: 0, star5: 0 };
    if (value == 1) {
      this.state.finalData[id].star1 = this.state.finalData[id].star1 + 1;
    } else if (value == 2) {
      this.state.finalData[id].star2 = this.state.finalData[id].star2 + 1;
    } else if (value == 3) {
      this.state.finalData[id].star3 = this.state.finalData[id].star3 + 1;
    } else if (value == 4) {
      this.state.finalData[id].star4 = this.state.finalData[id].star4 + 1;
    } else if (value == 5) {
      this.state.finalData[id].star5 = this.state.finalData[id].star5 + 1;
    }
  };

  render() {
    const { finalData } = this.state;
    const { pieChartData } = this.props;
    pieChartData.map((dataItem, index) => {
      return (
        <div>
          {dataItem.q1 ? this.starData("q1", dataItem.q1) : ""},
          {dataItem.q2 ? this.starData("q2", dataItem.q2) : ""},
          {dataItem.q3 ? this.starData("q3", dataItem.q3) : ""},
          {dataItem.q4 ? this.starData("q4", dataItem.q4) : ""}
        </div>
      );
    });

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <Chart
              width={"500px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["question 1", "Rating"],
                [
                  "0 star",
                  10 -
                    (finalData.q1.star1 +
                      finalData.q1.star2 +
                      finalData.q1.star3 +
                      finalData.q1.star4 +
                      finalData.q1.star5),
                ],
                ["1 star", finalData.q1.star1],
                ["2 star", finalData.q1.star2],
                ["3 star", finalData.q1.star3],
                ["4 star", finalData.q1.star4],
                ["5 star", finalData.q1.star5],
              ]}
              options={{
                title: "Q1 Ratings",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </Grid>

          <Grid item xs={12} md={4} sm={12} lg={4}>
            <Chart
              width={"500px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["question 2", "Rating"],
                [
                  "0 star",
                  10 -
                    (finalData.q2.star1 +
                      finalData.q2.star2 +
                      finalData.q2.star3 +
                      finalData.q2.star4 +
                      finalData.q2.star5),
                ],
                ["1 star", finalData.q2.star1],
                ["2 star", finalData.q2.star2],
                ["3 star", finalData.q2.star3],
                ["4 star", finalData.q2.star4],
                ["5 star", finalData.q2.star5],
              ]}
              options={{
                title: "Q2 Ratings",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </Grid>
          <Grid item xs={12} md={4} sm={12} lg={4}>
            <Chart
              width={"500px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["question 3", "Rating"],
                [
                  "0 star",
                  10 -
                    (finalData.q3.star1 +
                      finalData.q3.star2 +
                      finalData.q3.star3 +
                      finalData.q3.star4 +
                      finalData.q3.star5),
                ],
                ["1 star", finalData.q3.star1],
                ["2 star", finalData.q3.star2],
                ["3 star", finalData.q3.star3],
                ["4 star", finalData.q3.star4],
                ["5 star", finalData.q3.star5],
              ]}
              options={{
                title: "Q3 Ratings",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </Grid>
          <Grid item xs={12} md={4} sm={12} lg={4}>
            <Chart
              width={"500px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["question 4", "Rating"],
                [
                  "0 star",
                  10 -
                    (finalData.q4.star1 +
                      finalData.q4.star2 +
                      finalData.q4.star3 +
                      finalData.q4.star4 +
                      finalData.q4.star5),
                ],
                ["1 star", finalData.q4.star1],
                ["2 star", finalData.q4.star2],
                ["3 star", finalData.q4.star3],
                ["4 star", finalData.q4.star4],
                ["5 star", finalData.q4.star5],
              ]}
              options={{
                title: "Q4 Ratings",
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
