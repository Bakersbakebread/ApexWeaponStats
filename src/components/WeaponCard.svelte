<script>
    export let weapon;

</script>

<div class="card">
    <div class="card-image">
        <img class="u-max-full-width" 
        src={`images/weapons/${weapon.weapon.replace(/ /g,"_")}.png`} 
        alt="Weapon outline"/>
    </div>
    <div class="card-header">
        <h3>{weapon.weapon}</h3>
    </div>
    <div class="card-body">
        <div class="row stats">
            <div class="one-third column stat">

                <h4><strong>{weapon.legDamage}</strong></h4>
                Leg Damage
            </div>
            <div class="one-third column stat">

                <h4><strong>{weapon.bodyDamage}</strong></h4>
                Body Damage
                </div>
            <div class="one-third column stat">

                <h4><strong>{weapon.headDamage}</strong></h4>
                Head Damage
            </div>
                
        </div>
        <div class="row stats">
            <div class="one-third column stat">

                <h6><strong>Ammo</strong></h6>
                {weapon.ammo}
            </div>
            <div class="one-third column stat">

<h6><strong>RPM</strong></h6>
{weapon.rpm}
</div><div class="one-third column stat">

<h6><strong>Modes</strong></h6>
{weapon.fireModes}
</div>
                
        </div>
    </div>
</div>

<style>
.card{
    padding: 5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    max-width: 450px;
    min-height: 300px;
}
.card-image{
    max-width: 200px;
    margin: 0 auto;
}
.card-header{
    padding: 2rem 0;
    text-align: center;
}
.stats{
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
}
.stat{
    text-align: center;
}
.icon{
    font-size: 2rem;
}
h3 {  font-size: 30px; font-weight: 800; line-height: 36px; margin: 0 0 24px; text-align: center; text-transform: uppercase;}
</style>