"user strict"

function calcule(){

                 //coefficiant//
    let l = document.getElementById("il").value;
        a = document.getElementById("ia").value;
        b = document.getElementById("ib").value;
        c = document.getElementById("ic").value;
        d = document.getElementById("id").value;
        e = document.getElementById("ie").value;
        f = document.getElementById("if").value;
        g = document.getElementById("ig").value;
        h = document.getElementById("ih").value;
        i = document.getElementById("ii").value;
                
                   //note//
    let j = document.getElementById("ij").value;
        k = document.getElementById("ik").value;
        t = document.getElementById("it").value;
        m = document.getElementById("im").value;
        n = document.getElementById("in").value;
        o = document.getElementById("io").value;
        p = document.getElementById("ip").value;
        q = document.getElementById("iq").value;
        r = document.getElementById("ir").value;
        s = document.getElementById("is").value;
        
                  //c*n//
    let ca = Number(l)*Number(j); 
        cb = Number(a)*Number(k);
        cc = Number(b)*Number(t);
        cd = Number(c)*Number(m);
        ce = Number(d)*Number(n);
        cf = Number(e)*Number(o);
        cg = Number(f)*Number(p);
        ch = Number(g)*Number(q);
        ci = Number(h)*Number(r);
        cj = Number(i)*Number(s);
        
                  //c+c and c*n +c*n//
    let ab = Number(l)+Number(a)+Number(b)+Number(c)+Number(d)+Number(e)+Number(f)+Number(g)+Number(h)+Number(i); 
        ac = Number(ca)+Number(cb)+Number(cc)+Number(cd)+Number(ce)+Number(cf)+Number(cg)+Number(ch)+Number(ci)+Number(cj);   

                 //ab/ac//
    let resu = ac/ab;
    document.getElementById("di").innerHTML = resu;       
}