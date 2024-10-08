import Menu from "../../ui-kit/menu/menu";
import {ScrollView, StyleSheet, View} from "react-native";
import {useGetAllScoresCurrentQuery} from "../../../graphql";
import UiText from "../../ui-kit/typography/UiText";
import ScoreDisplay from "../../ui-kit/score/ScoreDisplay";
import BannerTitle from "../../ui-kit/bannertitle/bannerTitle";

const RankingScreen = () => {
    const {data, loading, error} = useGetAllScoresCurrentQuery()
    const total = data?.getAllScoresCurrent;

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

    return (
        <View style={styles.container}>
            <Menu/>
            <ScrollView>
                <BannerTitle title={'Le classement'} image={'souris-ranking.png'}/>
                <View style={styles.containerScore}>
                    {sortedScores.map((score) => {
                        const lastScore = getLastFilledScore(score);
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
        padding: 1,
        marginTop: 10,
    },
    userCard: {
        backgroundColor: '#FFDAB9',
        borderWidth: 1,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 10,
        padding: 6,
        justifyContent: 'space-between',
    },
    userCardLine1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userCardTitle: {
        backgroundColor: '#e1b286',
    }
});

export default RankingScreen;