export default {
  parseVolumes(volumes) {
    return volumes.map((vol) => {
      return {
        id: vol.volumeId,
        homeLocation: `${vol.homeLocation.street}, ${
          vol.homeLocation.additionalInfo
            ? vol.homeLocation.additionalInfo + ", "
            : ""
        } ${vol.homeLocation.city}, ${vol.homeLocation.zip}`,
        currentLocation: `${vol.currentLocation.street}, ${
          vol.currentLocation.additionalInfo
            ? vol.currentLocation.additionalInfo + ", "
            : ""
        } ${vol.currentLocation.city}, ${vol.currentLocation.zip}`,
        material: vol.material.description,
      };
    });
  },
};
