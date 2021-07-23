import { gql } from "@apollo/client";

export const LOAD_LAUNCHES = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;
