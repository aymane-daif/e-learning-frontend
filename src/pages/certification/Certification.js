
import React, { useCallback, useEffect, useState } from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from '@react-pdf/renderer';
import '../../style/certification.css';
import { styles } from './styling';
import { useHttpClient } from '../../security/hooks/axiosProvider';
import { useParams } from 'react-router-dom';

export default function Certification() {
  const httpClient = useHttpClient(false, false);
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);

  const getCertificate = useCallback(() => {
    httpClient.current?.get(`/certifications/${id}`).then((response) => {
      const { data } = response;
      setCertificate(data);
      console.log(data);
    });
  }, [httpClient, id]);

  useEffect(() => {
    console.log(id);
    getCertificate();
  }, [getCertificate, id]);

  const convertDate = () => {
    if (certificate == null) return '';

    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'Septembre',
      'October',
      'November',
      'December',
    ];

    const date = new Date(certificate.issuedDate);

    const day = date.getDay();
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();

    return day + ' ' + month + ', ' + year;
  };

  return (
    <div className='bigContainer'>
      <PDFViewer className='wrapper'>
        <Document onRender={() => {}}>
          {certificate && (
            <Page orientation='landscape'>
              <View className='certif-title' style={styles.certif_title}>
                <Text>COURSE CERTIFICATION</Text>
              </View>
              <View style={styles.second}>
                <Text>This is to certify that</Text>
              </View>
              <View style={styles.username}>
                <Text>{certificate.userFullname}</Text>
              </View>

              <View>
                <Text style={styles.text1}>
                  {' '}
                  has successfully completed the course by
                </Text>
                <Text style={styles.text2}>
                  demonstrating theorical and practical understanding of
                </Text>
              </View>

              <View style={styles.course_title}>
                <Text>{certificate.courseTitle}</Text>
              </View>
              <View style={styles.signatures}>
                <Image style={styles.image} src='/course_completed.png' />
                <View>
                  <Image style={styles.signature} src='/signature.png' />
                  <Text>E-learning</Text>
                </View>
              </View>

              <View style={styles.footer}>
                <View style={styles.brand_container}>
                  <Image style={styles.logo} src='/logo192.Png' />
                  <Text style={styles.brand}>E-learning</Text>
                </View>
                <Text style={styles.date}>Issued {convertDate()} </Text>
              </View>
            </Page>
          )}
        </Document>
      </PDFViewer>
    </div>
  );
}
