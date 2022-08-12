import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import { person } from "ionicons/icons";
import React from "react";
import {Person} from "../models/person.model";


const PersonItem: React.FC<{person: Person}> = ({person}) => {
  return (
    <IonCard>
    <IonCardHeader>
        <IonCardTitle>{person.firstName} {person.lastName}</IonCardTitle>
        <IonCardSubtitle>{person.country}</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
        Email: {person.email}<br/>
        Phone: {person.phone}
    </IonCardContent>
</IonCard>
  );
}

export default PersonItem;