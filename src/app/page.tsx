import { Calculator } from "../components/calculator";
import Community from "../components/community";
import Features from "../components/features";
import { Hero } from "../components/hero";
import Footer from "../components/footer";
import { Header } from "../components/header";
import { ThemeProvider } from "../components/theme-provider";

export default function HomePage() {
    return (
        <ThemeProvider>
            <Header />
            <main>
                <Hero />
                <Calculator />
                <Features />
                <Community />
            </main>
            <Footer />
        </ThemeProvider>
    );
}
