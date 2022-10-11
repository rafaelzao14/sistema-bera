import { SegmentedArc } from "@shipt/segmented-arc-for-react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { style } from "./style";

interface SegmentedProps {
  rangeValue?: number;
  description?: string;
}
const RangeArc = ({ rangeValue, description }: SegmentedProps) => {
  //FIXME:Configurar recebimento Props rangeValue API
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
      data: { label: "de boas" },
    },
    {
      scale: 0.25,
      filledColor: "#6E73FF",
      emptyColor: "#D9D9D9",
      data: { label: "aumentando os vacilos" },
    },
    {
      scale: 0.25,
      filledColor: "#F5E478",
      emptyColor: "#D9D9D9",
      data: { label: "muita burrice acumulando" },
    },
    {
      scale: 0.25,
      filledColor: "#FF746E",
      emptyColor: "#D9D9D9",
      data: { label: "Crítico demais" },
    },
  ];
  return (
    <View style={style.container}>
      <SegmentedArc
        segments={segments}
        fillValue={rangeValue}
        isAnimated={true}
        animationDelay={1000}
        showArcRanges={showArcRanges}
        ranges={ranges}
        spaceBetweenSegments={0}
        radius={150}
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
