"use client";
// pages/index.js


import {React, createContext} from 'react';
import BoxComponent from '@/components/Box';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

export default function Home() {
    return (
        <MathJaxContext>
            <div>
                <BoxComponent title="" explain="" figure="">
                    <h1>一様・等方宇宙の記述</h1>
                    <p>
                        一様・等方宇宙は、宇宙の大規模構造がどの方向にも同じように見えることを前提としています。この仮定の下で、宇宙の膨張は次のような形式で記述されます。
                    </p>
                    <MathJax>
                        {`\\[
                        ds^2 = -c^2 dt^2 + a(t)^2 \\left( \\frac{dr^2}{1 - kr^2} + r^2 d\\theta^2 + r^2 \\sin^2\\theta \\, d\\phi^2 \\right)
                        \\]`}
                    </MathJax>
                    <p>
                        ここで、\( a(t) \) は宇宙のスケールファクターであり、時間とともに変化します。\(k \) は宇宙の曲率を表し、\(k = 0 \) の場合は平坦な宇宙、\(k {'>'} 0 \) の場合は閉じた宇宙、\(k {'<'} 0 \) の場合は開いた宇宙を意味します。
                    </p>
                    <p>
                        一様・等方宇宙のダイナミクスはフリードマン方程式によって記述されます:
                    </p>
                    <MathJax>
                        {`\\[
                        \\left( \\frac{\\dot{a}}{a} \\right)^2 = \\frac{8\\pi G}{3} \\rho - \\frac{k c^2}{a^2} + \\frac{\\Lambda}{3}
                        \\]`}
                    </MathJax>
                    <p>
                        ここで、\( \rho \) は物質密度、\( \Lambda \) は宇宙定数、\(G \) は重力定数です。
                    </p>
                </BoxComponent>
            </div>
        </MathJaxContext>
    );
}
