import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { Tags } from "@/app/Tags";
import { FeatureCard } from "@/app/FeatureCard";
import { RoadmapCard } from "@/app/RoadmapCard";
import { Header } from "./Header";
import { SuggestionList } from "./SuggestionList";

export default function Home() {
  return (
    <main>
      <Container maxW={"1110px"} py={"20"} color={"text"}>
        <Flex alignItems={'start'} gap={7}>
          <Grid flexGrow={"1"} maxW="255px" gap={6} position={"sticky"} top="8">
            <FeatureCard />
            <Tags />
            <RoadmapCard />
          </Grid>
          <Grid alignContent={'start'} gap={6} flexGrow={"1"}>
            <Header />
            <SuggestionList />
          </Grid>
        </Flex>
      </Container>
    </main>
  );
}
