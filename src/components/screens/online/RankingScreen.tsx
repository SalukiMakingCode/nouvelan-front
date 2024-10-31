import Menu from "../../ui-kit/menu/menu";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import {useGetAllScoresCurrentQuery} from "../../../graphql";
import UiText from "../../ui-kit/typography/UiText";
import ScoreDisplay from "../../ui-kit/score/ScoreDisplay";
import BannerTitle from "../../ui-kit/bannertitle/bannerTitle";
import {useEffect} from "react";

const RankingScreen = () => {
    const {data, loading, error, refetch} = useGetAllScoresCurrentQuery()
    const total = data?.getAllScoresCurrent;

    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 60000);

        return () => clearInterval(intervalId);
    }, [refetch]);

    if (loading) {
        return <UiText>Loading...</UiText>;
    }

    if (error) {
        return <UiText>Error loading scores.</UiText>;
    }

    const sortedScores = data?.getAllScoresCurrent
        .map(score => ({
            ...score,
            total: score.aperitif + score.dessert + score.entreeChaude + score.entreeFroide + score.plat + score.sorbet + score.soupe
        }))
        .sort((a, b) => b.total - a.total); // Trier par total décroissant

    const getLastFilledScore = (score) => {
        if (score.dessert) return score.dessert;
        if (score.plat) return score.plat;
        if (score.sorbet) return score.sorbet;
        if (score.entreeChaude) return score.entreeChaude;
        if (score.soupe) return score.soupe;
        if (score.entreeFroide) return score.entreeFroide;
        if (score.aperitif) return score.aperitif;
        return 0;
    };

    const version = 2;

    return (
        <View style={styles.container}>
            <Menu/>
            <BannerTitle title={'Le classement'} image={'souris-ranking.png'}/>
            <ScrollView>
                <View style={styles.containerScore}>
                    {sortedScores.map((score) => {
                        const lastScore = getLastFilledScore(score);
                        if (version === 1) {
                            return (
                                <View style={styles.userCard} key={score.user.id}>
                                    <View style={styles.userCardTitle}>
                                        <UiText template={'title1Big'} textAlign={'center'}>
                                            {score.user.firstName}
                                        </UiText>
                                    </View>
                                    <View>
                                        <ScoreDisplay score={score.total}/>
                                    </View>

                                    <View>
                                        <UiText template={'title3'} textAlign={'center'} mt={15}>
                                            Score de la dernière épreuve : {lastScore} Pin's
                                        </UiText>
                                    </View>
                                </View>
                            );
                        }

                        if (version === 2) {
                            return (
                                <View key={score.user.id}>
                                    <View style={styles.card} key={score.user.id}>
                                        <View style={styles.userCardContainer}>
                                            <Image
                                                key={`profil-${score.user.id}`}
                                                source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/profil/" + score.user.login + ".png"}}
                                                style={styles.profilImage}
                                            />
                                            <UiText style={styles.cardTitle}>
                                                {score.user.firstName}
                                            </UiText>
                                        </View>

                                        <View style={styles.scoreDisplay}>
                                            <ScoreDisplay score={score.total}/>
                                        </View>
                                    </View>

                                    <View>
                                        <UiText style={styles.lastScore}>
                                            Score de la dernière épreuve : {lastScore} Pin's
                                        </UiText>
                                    </View>
                                </View>
                            );
                        }
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140e32'
    },
    containerScore: {
        flex: 1,
    },
    userCard: {
        backgroundColor: '#FFDAB9',
        borderWidth: 1,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    userCardLine1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userCardTitle: {
        backgroundColor: '#e1b286',
        borderRadius: 10,
    },
    card: {
        backgroundColor: '#FFDAB9',
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 50,
        alignItems: 'center',
    },
    userCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilImage: {
        width: 48,
        height: 48,
        marginLeft: 5,
    },
    cardTitle: {
        fontFamily: 'LuckiestGuy-Regular',
        fontSize: 19,
        color: '#000000',
        marginLeft: 10,
    },
    scoreDisplay: {
        flexDirection: 'row',
        flex: 1,
    },
    lastScore: {
        textAlign: 'center',
        backgroundColor: '#e1b286',
        color: '#000000',
        marginBottom: 15,
        width: '94%',
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
});

export default RankingScreen;