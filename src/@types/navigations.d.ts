export declare global {
  namespace ReactNavigation {
    type DebitsUserProps = {
      id: number;
      name: string;
    };
    interface RootParamList extends RootStackParamList {
      Register: undefined;
      Login: undefined;
      Debits: undefined;
      DebitsUser: {
        id: number;
        name: string;
      };
      PanelDelete: undefined;
      PanelUserManager: undefined;
      PanelReasonManager: undefined;
    }
  }
}
