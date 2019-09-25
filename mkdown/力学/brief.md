# 对偶的物理量
有一个系统状态参量$U$由物理量$p_1,p_2,\dots,p_n$决定,我们自然关心,$U$是如何随着$p_1,p_2,\dots,p_n$变化的.
一个很自然的想法,研究$U$关于$\bm{p}$的全微分:
$$dU = \sum \frac{\partial U}{\partial p_i}dp_i$$
在这里$\frac{\partial U}{\partial p_i}$显然也可看做系统的属性,它描述了$U$关于$p_i$的变化率,不如就记它为$q_i$,上面的式子就写成了:
$$
dU = \sum q_idp_i
$$
接下来!我们不如想象$U(p_1,p_2,\dots,p_n) = U(\bm{p})$是一个n维空间的一个场,每一个点都对应了一个值,且显然有:
$$
(q_1,q_2,\dots,q_n) = \bm{q} = \nabla_{\bm{p}} U
$$
我们可以看见,有一个与"坐标"$\bm{p}$对应的向量$\bm{q}$
现在想象有这么一个"**美好的**"空间, 在这个空间中, $\bm{q}$是均匀变化的物理量, 而不是$\bm{p}$, 那么我们在这个空间中自然不会再去观测$\bm{p}$来确定这个物理量了, 而是观测的是$\bm{q}$, 在这个空间上也应该有这么一个量$V$, 使得原来的规则成立, 也就是说:
$$
\bm{p} = \nabla_{\bm{q}} V
$$
不难得到:
$$
(\nabla_{\bm{q}} V,d\bm{q}) + (\nabla_{\bm{p}} U,d\bm{p}) = d(\bm{p},\bm{q})
$$
## 势能的例子
假如有:
$$
U=-\frac{k}{r}\quad(k>0,r>0)
$$
得到了对偶物理量:
$$
F = \frac{\partial U}{\partial r} = \frac{k}{r^2}
$$
那么有:
$$
r  = \sqrt{\frac{k}{F}}
$$
那么定义一个新状态函数$V = Fr-E$:
$$
V = 2\sqrt{kF}
$$
可以验证:
$$
\frac{\partial V}{\partial F} = \sqrt{\frac{k}{F}} = r
$$
这样,我们在力$F$的空间上, 定义了一种新的**能量**$V$, 通过它, 我们就可以从力$F$的改变中, 推断出位置$r$
## 例子
比如一个质点的能量$E$,假如我们认为由以下几个参量决定:$\{x,v,t\}$,那么有:
$$
dE = \frac{\partial E}{\partial x}dx
+\frac{\partial E}{\partial v}dv
+\frac{\partial E}{\partial t}dt
$$
这个式子告诉我们了,如果$x,v,t$分别变化一点,质点的总能量会怎么改变,其中有一些具有已知的物理意义,比如$\frac{\partial E}{\partial x}$显然是外场给质点的力,而$\frac{\partial E}{\partial t}$显然是输入给质点的功率.