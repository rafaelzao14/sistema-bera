import { SegmentedArc } from "@shipt/segmented-arc-for-react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

interface SegmentedProps {
  rangeValue?: number;
  description?: string;
}
const RangeArc = ({ rangeValue, description }: SegmentedProps) => {
  const [showArcRanges, setShowArcRanges] = useState<boolean>(false);

  const ranges: string[] = ["0", "25", "50", "75", "100..."];

  const handlePress = () => {
    setShowArcRanges(!showArcRanges);
  };
  const segments = [
    {
      scale: 0.25,
      filledColor: "#78F5CA",
      emptyColor: "#D9D9D9",
      data: { label: "Green" },
    },
    {
      scale: 0.25,
      filledColor: "#6E73FF",
      emptyColor: "#D9D9D9",
      data: { label: "Purple" },
    },
    {
      scale: 0.25,
      filledColor: "#F5E478",
      emptyColor: "#D9D9D9",
      data: { label: "Yellow" },
    },
    {
      scale: 0.25,
      filledColor: "#FF746E",
      emptyColor: "#D9D9D9",
      data: { label: "Red" },
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SegmentedArc
        segments={segments}
        fillValue={rangeValue}
        isAnimated={true}
        animationDelay={1000}
        showArcRanges={showArcRanges}
        ranges={ranges}
        spaceBetweenSegments={0}
      >
        {(metaData) => (
          <Pressable onPress={handlePress} style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, paddingTop: 16 }}>
              {metaData.lastFilledSegment.data.label}
            </Text>
            <Text style={{ lineHeight: 50, fontSize: 10 }}>{description}</Text>
          </Pressable>
        )}
      </SegmentedArc>
    </View>
  );
};

export default RangeArc;
