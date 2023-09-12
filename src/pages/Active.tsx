import React, { useEffect, useState } from 'react'

const Active = () => {

  // Define states
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});

  // Define credentials required for request
  const clientID = "100289";
  const clientSecret = "417622e7ab21cbde0deb3d73265e3bb01cde5f35";

  // Refresh details
  const refreshToken = "d18044bd6072ae258ed64e50389aeeecaa03c585";
  const refreshAddress = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

  // Activity endpoint
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`

  useEffect(() => {
    fetch(refreshAddress, {
      method: 'POST'
    })
    .then(response => response.json())
    .then(result => getActivities(result.access_token))
  }, [refreshAddress]);

  function getActivities(accessToken: string) {
    // fetch(callActivities + accessToken)
    // .then(res => res.json())
    // .then(data => setActivities(data), setIsLoading(prev => !prev))
    // .catch(e => console.log(e));
  }

  function showActivities() {
    if (isLoading) {
      return <>Loading...</>
    } else {
      console.log(activities);
    }
  }

  return (
    <div>
      {showActivities()}
    </div>
  )

}

export default Active