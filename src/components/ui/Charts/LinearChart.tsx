import { AreaSeries, ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

type LinearData = {
	time: string;
	value: number;
};

const MOCK_DATA: LinearData[] = [
	{ time: "2025-01-01", value: 60 },
	{ time: "2025-01-02", value: 40 },
	{ time: "2025-01-03", value: 85 },
	{ time: "2025-01-04", value: 120 },
	{ time: "2025-01-05", value: 100 },
	{ time: "2025-01-06", value: 140 },
	{ time: "2025-01-07", value: 145 },
	{ time: "2025-01-08", value: 130 },
	{ time: "2025-01-09", value: 150 },
	{ time: "2025-01-10", value: 160 },
	{ time: "2025-01-11", value: 155 },
	{ time: "2025-01-12", value: 170 },
	{ time: "2025-01-13", value: 165 },
	{ time: "2025-01-14", value: 180 },
	{ time: "2025-01-15", value: 175 },
	{ time: "2025-01-16", value: 190 },
	{ time: "2025-01-17", value: 185 },
	{ time: "2025-01-18", value: 200 },
	{ time: "2025-01-19", value: 195 },
	{ time: "2025-01-20", value: 210 },
	{ time: "2025-01-21", value: 205 },
	{ time: "2025-01-22", value: 220 },
	{ time: "2025-01-23", value: 1215 },
	{ time: "2025-01-24", value: 230 },
	{ time: "2025-01-25", value: 225 },
	{ time: "2025-01-26", value: 240 },
	{ time: "2025-01-27", value: 235 },
	{ time: "2025-01-28", value: 250 },
	{ time: "2025-01-29", value: 245 },
	{ time: "2025-01-30", value: 260 },
	{ time: "2025-01-31", value: 255 },
];

type LinearChartProps = {
	data?: LinearData[];

	backgroundColor?: string;
	mainLineColor?: string;
	gridColor?: string;
	textColor?: string;

	height?: number;
};

export const LinearChart = ({
	backgroundColor = "#17161B",
	gridColor = "#1F1F1F",
	mainLineColor = "#0148FE",
	textColor = "#8A8B8C",
	height = 400,
}: LinearChartProps) => {
	const chartContainerRef = useRef(null);

	useEffect(() => {
		if (chartContainerRef.current) {
			const chart = createChart(chartContainerRef.current, {
				layout: {
					fontSize: 14,
					attributionLogo: false,
					background: {
						type: ColorType.Solid,
						color: backgroundColor,
					},
					textColor: textColor,
				},
				grid: {
					vertLines: { color: gridColor },
					horzLines: { color: gridColor },
				},
				width: chartContainerRef.current.clientWidth,
				height: height,
			});
			chart.timeScale().fitContent();

			const newSeries = chart.addSeries(AreaSeries, {
				lineColor: mainLineColor,
				topColor: mainLineColor,
				bottomColor: "transparent",
			});

			newSeries.setData(MOCK_DATA);

			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef?.current?.clientWidth });
			};

			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
				chart.remove();
			};
		}
	}, [backgroundColor, mainLineColor, gridColor, textColor]);

	return (
		<div className="h-full w-full">
			<div ref={chartContainerRef} className="h-full w-full" />
		</div>
	);
};
