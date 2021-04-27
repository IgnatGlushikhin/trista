var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointSpring' )
  var i603 = data
  i602.spring = i603[0]
  i602.damper = i603[1]
  i602.targetPosition = i603[2]
  return i602
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointMotor' )
  var i605 = data
  i604.m_TargetVelocity = i605[0]
  i604.m_Force = i605[1]
  i604.m_FreeSpin = i605[2]
  return i604
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointLimits' )
  var i607 = data
  i606.m_Min = i607[0]
  i606.m_Max = i607[1]
  i606.m_Bounciness = i607[2]
  i606.m_BounceMinVelocity = i607[3]
  i606.m_ContactDistance = i607[4]
  i606.minBounce = i607[5]
  i606.maxBounce = i607[6]
  return i606
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointDrive' )
  var i609 = data
  i608.m_PositionSpring = i609[0]
  i608.m_PositionDamper = i609[1]
  i608.m_MaximumForce = i609[2]
  return i608
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i611 = data
  i610.m_Spring = i611[0]
  i610.m_Damper = i611[1]
  return i610
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i613 = data
  i612.m_Limit = i613[0]
  i612.m_Bounciness = i613[1]
  i612.m_ContactDistance = i613[2]
  return i612
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i615 = data
  i614.m_ExtremumSlip = i615[0]
  i614.m_ExtremumValue = i615[1]
  i614.m_AsymptoteSlip = i615[2]
  i614.m_AsymptoteValue = i615[3]
  i614.m_Stiffness = i615[4]
  return i614
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i617 = data
  i616.m_LowerAngle = i617[0]
  i616.m_UpperAngle = i617[1]
  return i616
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i619 = data
  i618.m_MotorSpeed = i619[0]
  i618.m_MaximumMotorTorque = i619[1]
  return i618
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i621 = data
  i620.m_DampingRatio = i621[0]
  i620.m_Frequency = i621[1]
  i620.m_Angle = i621[2]
  return i620
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i623 = data
  i622.m_LowerTranslation = i623[0]
  i622.m_UpperTranslation = i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i624 = root || new pc.UnityMaterial()
  var i625 = data
  i624.name = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'shader')
  i624.renderQueue = i625[3]
  i624.enableInstancing = !!i625[4]
  var i627 = i625[5]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i627[i + 0]) );
  }
  i624.floatParameters = i626
  var i629 = i625[6]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i629[i + 0]) );
  }
  i624.colorParameters = i628
  var i631 = i625[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i631[i + 0]) );
  }
  i624.vectorParameters = i630
  var i633 = i625[8]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i633[i + 0]) );
  }
  i624.textureParameters = i632
  var i635 = i625[9]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i635[i + 0]) );
  }
  i624.materialFlags = i634
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Color(i643[1], i643[2], i643[3], i643[4])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = new pc.Vec4( i647[1], i647[2], i647[3], i647[4] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'value')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i655 = data
  i654.name = i655[0]
  i654.enabled = !!i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i657 = data
  i656.position = new pc.Vec3( i657[0], i657[1], i657[2] )
  i656.scale = new pc.Vec3( i657[3], i657[4], i657[5] )
  i656.rotation = new pc.Quat(i657[6], i657[7], i657[8], i657[9])
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i659 = data
  i658.enabled = !!i659[0]
  i658.isTrigger = !!i659[1]
  request.r(i659[2], i659[3], 0, i658, 'material')
  i658.center = new pc.Vec3( i659[4], i659[5], i659[6] )
  i658.radius = i659[7]
  return i658
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i660 = root || request.c( 'UnselectedColliderDrawer' )
  var i661 = data
  return i660
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i662 = root || request.c( 'WheatPieceDestroyer' )
  var i663 = data
  return i662
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i664 = root || request.c( 'WheatPieceRandomizer' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'partsParent')
  return i664
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i666 = root || request.c( 'DisableIfTooFar' )
  var i667 = data
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'sharedMesh')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'additionalVertexStreams')
  i670.enabled = !!i671[2]
  request.r(i671[3], i671[4], 0, i670, 'sharedMaterial')
  var i673 = i671[5]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.sharedMaterials = i672
  i670.receiveShadows = !!i671[6]
  i670.shadowCastingMode = i671[7]
  i670.sortingLayerID = i671[8]
  i670.sortingOrder = i671[9]
  i670.lightmapIndex = i671[10]
  i670.lightmapSceneIndex = i671[11]
  i670.lightmapScaleOffset = new pc.Vec4( i671[12], i671[13], i671[14], i671[15] )
  i670.lightProbeUsage = i671[16]
  i670.reflectionProbeUsage = i671[17]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i677 = data
  i676.name = i677[0]
  i676.tag = i677[1]
  i676.enabled = !!i677[2]
  i676.isStatic = !!i677[3]
  i676.layer = i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i679 = data
  i678.name = i679[0]
  i678.halfPrecision = !!i679[1]
  i678.vertexCount = i679[2]
  i678.aabb = i679[3]
  var i681 = i679[4]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( !!i681[i + 0] );
  }
  i678.streams = i680
  i678.vertices = i679[5]
  var i683 = i679[6]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i683[i + 0]) );
  }
  i678.subMeshes = i682
  var i685 = i679[7]
  var i684 = []
  for(var i = 0; i < i685.length; i += 16) {
    i684.push( new pc.Mat4().setData(i685[i + 0], i685[i + 1], i685[i + 2], i685[i + 3],  i685[i + 4], i685[i + 5], i685[i + 6], i685[i + 7],  i685[i + 8], i685[i + 9], i685[i + 10], i685[i + 11],  i685[i + 12], i685[i + 13], i685[i + 14], i685[i + 15]) );
  }
  i678.bindposes = i684
  var i687 = i679[8]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i687[i + 0]) );
  }
  i678.blendShapes = i686
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i693 = data
  i692.triangles = i693[0]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i699 = data
  i698.name = i699[0]
  var i701 = i699[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i701[i + 0]) );
  }
  i698.frames = i700
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i703 = data
  i702.name = i703[0]
  i702.width = i703[1]
  i702.height = i703[2]
  i702.mipmapCount = i703[3]
  i702.anisoLevel = i703[4]
  i702.filterMode = i703[5]
  i702.hdr = !!i703[6]
  i702.format = i703[7]
  i702.wrapMode = i703[8]
  i702.alphaIsTransparency = !!i703[9]
  i702.alphaSource = i703[10]
  return i702
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i704 = root || request.c( 'DamagingObstacle' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'parts')
  i704.m_damage = i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i707 = data
  i706.enabled = !!i707[0]
  request.r(i707[1], i707[2], 0, i706, 'sharedMaterial')
  var i709 = i707[3]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.sharedMaterials = i708
  i706.receiveShadows = !!i707[4]
  i706.shadowCastingMode = i707[5]
  i706.sortingLayerID = i707[6]
  i706.sortingOrder = i707[7]
  i706.lightmapIndex = i707[8]
  i706.lightmapSceneIndex = i707[9]
  i706.lightmapScaleOffset = new pc.Vec4( i707[10], i707[11], i707[12], i707[13] )
  i706.lightProbeUsage = i707[14]
  i706.reflectionProbeUsage = i707[15]
  request.r(i707[16], i707[17], 0, i706, 'mesh')
  i706.meshCount = i707[18]
  i706.activeVertexStreamsCount = i707[19]
  i706.alignment = i707[20]
  i706.renderMode = i707[21]
  i706.sortMode = i707[22]
  i706.lengthScale = i707[23]
  i706.velocityScale = i707[24]
  i706.cameraVelocityScale = i707[25]
  i706.normalDirection = i707[26]
  i706.sortingFudge = i707[27]
  i706.minParticleSize = i707[28]
  i706.maxParticleSize = i707[29]
  i706.pivot = new pc.Vec3( i707[30], i707[31], i707[32] )
  request.r(i707[33], i707[34], 0, i706, 'trailMaterial')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i711 = data
  i710.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i711[0], i710.main)
  i710.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i711[1], i710.colorBySpeed)
  i710.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i711[2], i710.colorOverLifetime)
  i710.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i711[3], i710.emission)
  i710.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i711[4], i710.rotationBySpeed)
  i710.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i711[5], i710.rotationOverLifetime)
  i710.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i711[6], i710.shape)
  i710.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i711[7], i710.sizeBySpeed)
  i710.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i711[8], i710.sizeOverLifetime)
  i710.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i711[9], i710.textureSheetAnimation)
  i710.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i711[10], i710.velocityOverLifetime)
  i710.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i711[11], i710.noise)
  i710.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i711[12], i710.inheritVelocity)
  i710.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i711[13], i710.forceOverLifetime)
  i710.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i711[14], i710.limitVelocityOverLifetime)
  i710.useAutoRandomSeed = !!i711[15]
  i710.randomSeed = i711[16]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemMain()
  var i713 = data
  i712.duration = i713[0]
  i712.loop = !!i713[1]
  i712.prewarm = !!i713[2]
  i712.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.startDelay)
  i712.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[4], i712.startLifetime)
  i712.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[5], i712.startSpeed)
  i712.startSize3D = !!i713[6]
  i712.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[7], i712.startSizeX)
  i712.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[8], i712.startSizeY)
  i712.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[9], i712.startSizeZ)
  i712.startRotation3D = !!i713[10]
  i712.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[11], i712.startRotationX)
  i712.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[12], i712.startRotationY)
  i712.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[13], i712.startRotationZ)
  i712.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i713[14], i712.startColor)
  i712.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[15], i712.gravityModifier)
  i712.simulationSpace = i713[16]
  request.r(i713[17], i713[18], 0, i712, 'customSimulationSpace')
  i712.simulationSpeed = i713[19]
  i712.useUnscaledTime = !!i713[20]
  i712.scalingMode = i713[21]
  i712.playOnAwake = !!i713[22]
  i712.maxParticles = i713[23]
  i712.emitterVelocityMode = i713[24]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i714 = root || new pc.MinMaxCurve()
  var i715 = data
  i714.mode = i715[0]
  i714.curveMin = new pc.AnimationCurve( { keys_flow: i715[1] } )
  i714.curveMax = new pc.AnimationCurve( { keys_flow: i715[2] } )
  i714.curveMultiplier = i715[3]
  i714.constantMin = i715[4]
  i714.constantMax = i715[5]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i716 = root || new pc.MinMaxGradient()
  var i717 = data
  i716.mode = i717[0]
  i716.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i717[1], i716.gradientMin)
  i716.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i717[2], i716.gradientMax)
  i716.colorMin = new pc.Color(i717[3], i717[4], i717[5], i717[6])
  i716.colorMax = new pc.Color(i717[7], i717[8], i717[9], i717[10])
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i719 = data
  i718.mode = i719[0]
  var i721 = i719[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i721[i + 0]) );
  }
  i718.colorKeys = i720
  var i723 = i719[2]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i723[i + 0]) );
  }
  i718.alphaKeys = i722
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemColorBySpeed()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i725[1], i724.color)
  i724.range = new pc.Vec2( i725[2], i725[3] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i729 = data
  i728.color = new pc.Color(i729[0], i729[1], i729[2], i729[3])
  i728.time = i729[4]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i733 = data
  i732.alpha = i733[0]
  i732.time = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemColorOverLifetime()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i735[1], i734.color)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemEmitter()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[1], i736.rateOverTime)
  i736.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.rateOverDistance)
  var i739 = i737[3]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i739[i + 0]) );
  }
  i736.bursts = i738
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemBurst()
  var i743 = data
  i742.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[0], i742.count)
  i742.cycleCount = i743[1]
  i742.minCount = i743[2]
  i742.maxCount = i743[3]
  i742.repeatInterval = i743[4]
  i742.time = i743[5]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemRotationBySpeed()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  i744.range = new pc.Vec2( i745[5], i745[6] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemRotationOverLifetime()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.x)
  i746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.y)
  i746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.z)
  i746.separateAxes = !!i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemShape()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.shapeType = i749[1]
  i748.randomDirectionAmount = i749[2]
  i748.sphericalDirectionAmount = i749[3]
  i748.randomPositionAmount = i749[4]
  i748.alignToDirection = !!i749[5]
  i748.radius = i749[6]
  i748.radiusMode = i749[7]
  i748.radiusSpread = i749[8]
  i748.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[9], i748.radiusSpeed)
  i748.radiusThickness = i749[10]
  i748.angle = i749[11]
  i748.length = i749[12]
  i748.boxThickness = new pc.Vec3( i749[13], i749[14], i749[15] )
  i748.meshShapeType = i749[16]
  request.r(i749[17], i749[18], 0, i748, 'mesh')
  request.r(i749[19], i749[20], 0, i748, 'meshRenderer')
  request.r(i749[21], i749[22], 0, i748, 'skinnedMeshRenderer')
  i748.useMeshMaterialIndex = !!i749[23]
  i748.meshMaterialIndex = i749[24]
  i748.useMeshColors = !!i749[25]
  i748.normalOffset = i749[26]
  i748.arc = i749[27]
  i748.arcMode = i749[28]
  i748.arcSpread = i749[29]
  i748.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[30], i748.arcSpeed)
  i748.donutRadius = i749[31]
  i748.position = new pc.Vec3( i749[32], i749[33], i749[34] )
  i748.rotation = new pc.Vec3( i749[35], i749[36], i749[37] )
  i748.scale = new pc.Vec3( i749[38], i749[39], i749[40] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemSizeBySpeed()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.separateAxes = !!i751[4]
  i750.range = new pc.Vec2( i751[5], i751[6] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemSizeOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.separateAxes = !!i753[4]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.mode = i755[1]
  i754.animation = i755[2]
  i754.numTilesX = i755[3]
  i754.numTilesY = i755[4]
  i754.useRandomRow = !!i755[5]
  i754.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[6], i754.frameOverTime)
  i754.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[7], i754.startFrame)
  i754.cycleCount = i755[8]
  i754.rowIndex = i755[9]
  i754.flipU = i755[10]
  i754.flipV = i755[11]
  i754.spriteCount = i755[12]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[4], i756.speedModifier)
  i756.space = i757[5]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemNoise()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.separateAxes = !!i759[1]
  i758.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.strengthX)
  i758.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.strengthY)
  i758.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[4], i758.strengthZ)
  i758.frequency = i759[5]
  i758.damping = !!i759[6]
  i758.octaveCount = i759[7]
  i758.octaveMultiplier = i759[8]
  i758.octaveScale = i759[9]
  i758.quality = i759[10]
  i758.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[11], i758.scrollSpeed)
  i758.scrollSpeedMultiplier = i759[12]
  i758.remapEnabled = !!i759[13]
  i758.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[14], i758.remapX)
  i758.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[15], i758.remapY)
  i758.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[16], i758.remapZ)
  i758.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[17], i758.positionAmount)
  i758.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[18], i758.rotationAmount)
  i758.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[19], i758.sizeAmount)
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemInheritVelocity()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.mode = i761[1]
  i760.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.curve)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemForceOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.space = i763[4]
  i762.randomized = !!i763[5]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.limitX)
  i764.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.limitY)
  i764.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.limitZ)
  i764.dampen = i765[4]
  i764.separateAxes = !!i765[5]
  i764.space = i765[6]
  i764.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[7], i764.drag)
  i764.multiplyDragByParticleSize = !!i765[8]
  i764.multiplyDragByParticleVelocity = !!i765[9]
  return i764
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i766 = root || request.c( 'LootableItem' )
  var i767 = data
  i766.OnLootableItemCollected = request.d('LootableItemEvent', i767[0], i766.OnLootableItemCollected)
  request.r(i767[1], i767[2], 0, i766, 'item')
  i766.kind = i767[3]
  return i766
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i768 = root || request.c( 'LootableItemEvent' )
  var i769 = data
  i768.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i769[0], i768.m_PersistentCalls)
  return i768
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('UnityEngine.Events.PersistentCall', i773[i + 0]));
  }
  i770.m_Calls = i772
  return i770
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_Target')
  i776.m_MethodName = i777[2]
  i776.m_Mode = i777[3]
  i776.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i777[4], i776.m_Arguments)
  i776.m_CallState = i777[5]
  return i776
}

Deserializers["LightPole"] = function (request, data, root) {
  var i778 = root || request.c( 'LightPole' )
  var i779 = data
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i781 = data
  i780.pivot = new pc.Vec2( i781[0], i781[1] )
  i780.anchorMin = new pc.Vec2( i781[2], i781[3] )
  i780.anchorMax = new pc.Vec2( i781[4], i781[5] )
  i780.sizeDelta = new pc.Vec2( i781[6], i781[7] )
  i780.anchoredPosition3D = new pc.Vec3( i781[8], i781[9], i781[10] )
  i780.rotation = new pc.Quat(i781[11], i781[12], i781[13], i781[14])
  i780.scale = new pc.Vec3( i781[15], i781[16], i781[17] )
  return i780
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.Slider' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'm_FillRect')
  request.r(i783[2], i783[3], 0, i782, 'm_HandleRect')
  i782.m_Direction = i783[4]
  i782.m_MinValue = i783[5]
  i782.m_MaxValue = i783[6]
  i782.m_WholeNumbers = !!i783[7]
  i782.m_Value = i783[8]
  i782.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i783[9], i782.m_OnValueChanged)
  i782.m_Navigation = request.d('UnityEngine.UI.Navigation', i783[10], i782.m_Navigation)
  i782.m_Transition = i783[11]
  i782.m_Colors = request.d('UnityEngine.UI.ColorBlock', i783[12], i782.m_Colors)
  i782.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i783[13], i782.m_SpriteState)
  i782.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i783[14], i782.m_AnimationTriggers)
  i782.m_Interactable = !!i783[15]
  request.r(i783[16], i783[17], 0, i782, 'm_TargetGraphic')
  return i782
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i785 = data
  i784.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i785[0], i784.m_PersistentCalls)
  return i784
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i787 = data
  i786.m_Mode = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'm_SelectOnUp')
  request.r(i787[3], i787[4], 0, i786, 'm_SelectOnDown')
  request.r(i787[5], i787[6], 0, i786, 'm_SelectOnLeft')
  request.r(i787[7], i787[8], 0, i786, 'm_SelectOnRight')
  return i786
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i789 = data
  i788.m_NormalColor = new pc.Color(i789[0], i789[1], i789[2], i789[3])
  i788.m_HighlightedColor = new pc.Color(i789[4], i789[5], i789[6], i789[7])
  i788.m_PressedColor = new pc.Color(i789[8], i789[9], i789[10], i789[11])
  i788.m_SelectedColor = new pc.Color(i789[12], i789[13], i789[14], i789[15])
  i788.m_DisabledColor = new pc.Color(i789[16], i789[17], i789[18], i789[19])
  i788.m_ColorMultiplier = i789[20]
  i788.m_FadeDuration = i789[21]
  return i788
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_HighlightedSprite')
  request.r(i791[2], i791[3], 0, i790, 'm_PressedSprite')
  request.r(i791[4], i791[5], 0, i790, 'm_SelectedSprite')
  request.r(i791[6], i791[7], 0, i790, 'm_DisabledSprite')
  return i790
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i793 = data
  i792.m_NormalTrigger = i793[0]
  i792.m_HighlightedTrigger = i793[1]
  i792.m_PressedTrigger = i793[2]
  i792.m_SelectedTrigger = i793[3]
  i792.m_DisabledTrigger = i793[4]
  return i792
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i794 = root || request.c( 'WheatSliderWidget' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'amountText')
  request.r(i795[2], i795[3], 0, i794, 'BarIconImage')
  request.r(i795[4], i795[5], 0, i794, 'WheatImage')
  request.r(i795[6], i795[7], 0, i794, 'products')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i797 = data
  i796.cullTransparentMesh = !!i797[0]
  return i796
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.Text' )
  var i799 = data
  i798.m_FontData = request.d('UnityEngine.UI.FontData', i799[0], i798.m_FontData)
  i798.m_Text = i799[1]
  request.r(i799[2], i799[3], 0, i798, 'm_Material')
  i798.m_Maskable = !!i799[4]
  i798.m_Color = new pc.Color(i799[5], i799[6], i799[7], i799[8])
  i798.m_RaycastTarget = !!i799[9]
  return i798
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.FontData' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'm_Font')
  i800.m_FontSize = i801[2]
  i800.m_FontStyle = i801[3]
  i800.m_BestFit = !!i801[4]
  i800.m_MinSize = i801[5]
  i800.m_MaxSize = i801[6]
  i800.m_Alignment = i801[7]
  i800.m_AlignByGeometry = !!i801[8]
  i800.m_RichText = !!i801[9]
  i800.m_HorizontalOverflow = i801[10]
  i800.m_VerticalOverflow = i801[11]
  i800.m_LineSpacing = i801[12]
  return i800
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.Image' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_Sprite')
  i802.m_Type = i803[2]
  i802.m_PreserveAspect = !!i803[3]
  i802.m_FillCenter = !!i803[4]
  i802.m_FillMethod = i803[5]
  i802.m_FillAmount = i803[6]
  i802.m_FillClockwise = !!i803[7]
  i802.m_FillOrigin = i803[8]
  i802.m_UseSpriteMesh = !!i803[9]
  i802.m_PixelsPerUnitMultiplier = i803[10]
  request.r(i803[11], i803[12], 0, i802, 'm_Material')
  i802.m_Maskable = !!i803[13]
  i802.m_Color = new pc.Color(i803[14], i803[15], i803[16], i803[17])
  i802.m_RaycastTarget = !!i803[18]
  return i802
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i805 = data
  i804.m_IgnoreLayout = !!i805[0]
  i804.m_MinWidth = i805[1]
  i804.m_MinHeight = i805[2]
  i804.m_PreferredWidth = i805[3]
  i804.m_PreferredHeight = i805[4]
  i804.m_FlexibleWidth = i805[5]
  i804.m_FlexibleHeight = i805[6]
  i804.m_LayoutPriority = i805[7]
  return i804
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i806 = root || request.c( 'HealthBar' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'HealthProvider')
  request.r(i807[2], i807[3], 0, i806, 'progressImage')
  request.r(i807[4], i807[5], 0, i806, 'BarIconImage')
  return i806
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i808 = root || request.c( 'ShieldBar' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'progressImage')
  request.r(i809[2], i809[3], 0, i808, 'barIconImage')
  request.r(i809[4], i809[5], 0, i808, 'root')
  return i808
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i810 = root || request.c( 'UIActiveBoost' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'imgIcon')
  request.r(i811[2], i811[3], 0, i810, 'timerImg')
  var i813 = i811[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('UIActiveBoost+SpriteByKind', i813[i + 0]) );
  }
  i810.sprites = i812
  i810.Kind = i811[5]
  return i810
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i816 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i817 = data
  i816.Kind = i817[0]
  request.r(i817[1], i817[2], 0, i816, 'Sprite')
  return i816
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i818 = root || request.c( 'ShootButtonCtrl' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'txtAmount')
  request.r(i819[2], i819[3], 0, i818, 'timerImg')
  request.r(i819[4], i819[5], 0, i818, 'products')
  return i818
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Button' )
  var i821 = data
  i820.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i821[0], i820.m_OnClick)
  i820.m_Navigation = request.d('UnityEngine.UI.Navigation', i821[1], i820.m_Navigation)
  i820.m_Transition = i821[2]
  i820.m_Colors = request.d('UnityEngine.UI.ColorBlock', i821[3], i820.m_Colors)
  i820.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i821[4], i820.m_SpriteState)
  i820.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i821[5], i820.m_AnimationTriggers)
  i820.m_Interactable = !!i821[6]
  request.r(i821[7], i821[8], 0, i820, 'm_TargetGraphic')
  return i820
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i823 = data
  i822.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i823[0], i822.m_PersistentCalls)
  return i822
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_ObjectArgument')
  i824.m_ObjectArgumentAssemblyTypeName = i825[2]
  i824.m_IntArgument = i825[3]
  i824.m_FloatArgument = i825[4]
  i824.m_StringArgument = i825[5]
  i824.m_BoolArgument = !!i825[6]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i827 = data
  i826.mass = i827[0]
  i826.drag = i827[1]
  i826.angularDrag = i827[2]
  i826.useGravity = !!i827[3]
  i826.isKinematic = !!i827[4]
  i826.constraints = i827[5]
  i826.maxAngularVelocity = i827[6]
  i826.collisionDetectionMode = i827[7]
  i826.interpolation = i827[8]
  return i826
}

Deserializers["CarController"] = function (request, data, root) {
  var i828 = root || request.c( 'CarController' )
  var i829 = data
  var i831 = i829[0]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.m_WheelColliders = i830
  i828.TorqueMultiplier = i829[1]
  i828.m_CarDriveType = i829[2]
  var i833 = i829[3]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i828.m_WheelMeshes = i832
  var i835 = i829[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i828.m_WheelEffects = i834
  i828.m_CentreOfMassOffset = new pc.Vec3( i829[5], i829[6], i829[7] )
  i828.m_MaximumSteerAngle = i829[8]
  i828.m_SteerHelper = i829[9]
  i828.m_TractionControl = i829[10]
  i828.m_FullTorqueOverAllWheels = i829[11]
  i828.m_ReverseTorque = i829[12]
  i828.m_MaxHandbrakeTorque = i829[13]
  i828.m_Downforce = i829[14]
  i828.m_SpeedType = i829[15]
  i828.m_Topspeed = i829[16]
  i828.m_RevRangeBoundary = i829[17]
  i828.m_SlipLimit = i829[18]
  i828.m_BrakeTorque = i829[19]
  i828.m_GearNum = i829[20]
  request.r(i829[21], i829[22], 0, i828, 'm_Rigidbody')
  return i828
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i842 = root || request.c( 'CarUserControl' )
  var i843 = data
  i842.CanMove = !!i843[0]
  request.r(i843[1], i843[2], 0, i842, 'pathCreator')
  request.r(i843[3], i843[4], 0, i842, 'playerCarrot')
  request.r(i843[5], i843[6], 0, i842, 'farPointInDirectionOfView')
  request.r(i843[7], i843[8], 0, i842, 'ghostWriter')
  request.r(i843[9], i843[10], 0, i842, 'carBody')
  request.r(i843[11], i843[12], 0, i842, 'collisionParticlesLeft')
  request.r(i843[13], i843[14], 0, i842, 'collisionParticlesRight')
  return i842
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i845 = data
  i844.engineSoundStyle = i845[0]
  request.r(i845[1], i845[2], 0, i844, 'lowAccelClip')
  request.r(i845[3], i845[4], 0, i844, 'lowDecelClip')
  request.r(i845[5], i845[6], 0, i844, 'highAccelClip')
  request.r(i845[7], i845[8], 0, i844, 'highDecelClip')
  i844.pitchMultiplier = i845[9]
  i844.lowPitchMin = i845[10]
  i844.lowPitchMax = i845[11]
  i844.highPitchMultiplier = i845[12]
  i844.maxRolloffDistance = i845[13]
  i844.dopplerLevel = i845[14]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i847 = data
  i846.center = new pc.Vec3( i847[0], i847[1], i847[2] )
  i846.size = new pc.Vec3( i847[3], i847[4], i847[5] )
  i846.enabled = !!i847[6]
  i846.isTrigger = !!i847[7]
  request.r(i847[8], i847[9], 0, i846, 'material')
  return i846
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i848 = root || request.c( 'RaceCar' )
  var i849 = data
  i848.Owner = i849[0]
  i848.Score = i849[1]
  request.r(i849[2], i849[3], 0, i848, 'boosts')
  request.r(i849[4], i849[5], 0, i848, 'products')
  request.r(i849[6], i849[7], 0, i848, 'boostsEffectPosition')
  request.r(i849[8], i849[9], 0, i848, 'effectSheildPrefab')
  request.r(i849[10], i849[11], 0, i848, 'effectDoublePrefab')
  return i848
}

Deserializers["HealthController"] = function (request, data, root) {
  var i850 = root || request.c( 'HealthController' )
  var i851 = data
  i850.Health = i851[0]
  i850.MaxHealth = i851[1]
  i850.Shield = i851[2]
  i850.MaxShield = i851[3]
  request.r(i851[4], i851[5], 0, i850, 'MainScreen')
  request.r(i851[6], i851[7], 0, i850, 'LossScreen')
  request.r(i851[8], i851[9], 0, i850, 'boosts')
  return i850
}

Deserializers["Gun"] = function (request, data, root) {
  var i852 = root || request.c( 'Gun' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'rocketPrefab')
  request.r(i853[2], i853[3], 0, i852, 'carUserControl')
  request.r(i853[4], i853[5], 0, i852, 'products')
  return i852
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i854 = root || request.c( 'JustWheelMeshes' )
  var i855 = data
  var i857 = i855[0]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.m_WheelMeshes = i856
  return i854
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i858 = root || request.c( 'BlobShadowMovement' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'Target')
  i858.Offset = new pc.Vec3( i859[2], i859[3], i859[4] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'clip')
  i860.playOnAwake = !!i861[2]
  i860.loop = !!i861[3]
  i860.enabled = !!i861[4]
  return i860
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i862 = root || request.c( 'WheelEffects' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'SkidTrailPrefab')
  request.r(i863[2], i863[3], 0, i862, 'skidParticles')
  return i862
}

Deserializers["Rocket"] = function (request, data, root) {
  var i864 = root || request.c( 'Rocket' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'jetStream')
  request.r(i865[2], i865[3], 0, i864, 'explosionPrefab')
  return i864
}

Deserializers["Explosion"] = function (request, data, root) {
  var i866 = root || request.c( 'Explosion' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'explosionParticleSystem')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'animatorController')
  i868.updateMode = i869[2]
  var i871 = i869[3]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.humanBones = i870
  i868.enabled = !!i869[4]
  return i868
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i874 = root || request.c( 'DriverDescription' )
  var i875 = data
  var i877 = i875[0]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.driverPrefab = i876
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i879 = data
  i878.enabled = !!i879[0]
  request.r(i879[1], i879[2], 0, i878, 'sharedMaterial')
  var i881 = i879[3]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.sharedMaterials = i880
  i878.receiveShadows = !!i879[4]
  i878.shadowCastingMode = i879[5]
  i878.sortingLayerID = i879[6]
  i878.sortingOrder = i879[7]
  i878.lightmapIndex = i879[8]
  i878.lightmapSceneIndex = i879[9]
  i878.lightmapScaleOffset = new pc.Vec4( i879[10], i879[11], i879[12], i879[13] )
  i878.lightProbeUsage = i879[14]
  i878.reflectionProbeUsage = i879[15]
  request.r(i879[16], i879[17], 0, i878, 'sharedMesh')
  var i883 = i879[18]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i878.bones = i882
  i878.updateWhenOffscreen = !!i879[19]
  i878.localBounds = i879[20]
  request.r(i879[21], i879[22], 0, i878, 'rootBone')
  var i885 = i879[23]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i885[i + 0]) );
  }
  i878.blendShapesWeights = i884
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i889 = data
  i888.weight = i889[0]
  return i888
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i890 = root || request.c( 'TrackHandles' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'MainPath')
  i890.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i891[2], i890.OnFinishReached)
  request.r(i891[3], i891[4], 0, i890, 'Root')
  return i890
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i895 = data
  i894.enabled = !!i895[0]
  i894.isTrigger = !!i895[1]
  request.r(i895[2], i895[3], 0, i894, 'material')
  request.r(i895[4], i895[5], 0, i894, 'sharedMesh')
  i894.convex = !!i895[6]
  return i894
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i896 = root || request.c( 'FinishTrigger' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'trackHandles')
  return i896
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i898 = root || request.c( 'PathCreation.PathCreator' )
  var i899 = data
  i898.editorData = request.d('PathCreation.PathCreatorData', i899[0], i898.editorData)
  i898.initialized = !!i899[1]
  return i898
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i900 = root || request.c( 'PathCreation.PathCreatorData' )
  var i901 = data
  i900.vertexPathMaxAngleError = i901[0]
  i900.vertexPathMinVertexSpacing = i901[1]
  i900.showTransformTool = !!i901[2]
  i900.showPathBounds = !!i901[3]
  i900.showPerSegmentBounds = !!i901[4]
  i900.displayAnchorPoints = !!i901[5]
  i900.displayControlPoints = !!i901[6]
  i900.bezierHandleScale = i901[7]
  i900.globalDisplaySettingsFoldout = !!i901[8]
  i900.keepConstantHandleSize = !!i901[9]
  i900.showNormalsInVertexMode = !!i901[10]
  i900.showBezierPathInVertexMode = !!i901[11]
  i900.showDisplayOptions = !!i901[12]
  i900.showPathOptions = !!i901[13]
  i900.showVertexPathDisplayOptions = !!i901[14]
  i900.showVertexPathOptions = !!i901[15]
  i900.showNormals = !!i901[16]
  i900.showNormalsHelpInfo = !!i901[17]
  i900.tabIndex = i901[18]
  i900._bezierPath = request.d('PathCreation.BezierPath', i901[19], i900._bezierPath)
  i900.vertexPathUpToDate = !!i901[20]
  return i900
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i902 = root || request.c( 'PathCreation.BezierPath' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i905.length; i += 3) {
    i904.add(new pc.Vec3( i905[i + 0], i905[i + 1], i905[i + 2] ));
  }
  i902.points = i904
  i902.isClosed = !!i903[1]
  i902.space = i903[2]
  i902.controlMode = i903[3]
  i902.autoControlLength = i903[4]
  i902.boundsUpToDate = !!i903[5]
  var i907 = i903[6]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(i907[i + 0]);
  }
  i902.perAnchorNormalsAngle = i906
  i902.globalNormalsAngle = i903[7]
  i902.flipNormals = !!i903[8]
  return i902
}

Deserializers["GameManager"] = function (request, data, root) {
  var i912 = root || request.c( 'GameManager' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'MainCamera')
  i912.LandscapeFov = i913[2]
  i912.PortraitFov = i913[3]
  i912.WheatCullDistance = i913[4]
  request.r(i913[5], i913[6], 0, i912, 'CountdownWidget')
  request.r(i913[7], i913[8], 0, i912, 'TutorialWindow')
  request.r(i913[9], i913[10], 0, i912, 'MainBackroundImage')
  request.r(i913[11], i913[12], 0, i912, 'WinScreen')
  request.r(i913[13], i913[14], 0, i912, 'LoseScreen')
  request.r(i913[15], i913[16], 0, i912, 'MainScreen')
  request.r(i913[17], i913[18], 0, i912, 'btnLeft')
  request.r(i913[19], i913[20], 0, i912, 'btnRight')
  request.r(i913[21], i913[22], 0, i912, 'healthBar')
  var i915 = i913[23]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.Opponents = i914
  request.r(i913[24], i913[25], 0, i912, 'PlayerCar')
  request.r(i913[26], i913[27], 0, i912, 'CarUserControl')
  i912.Position = i913[28]
  request.r(i913[29], i913[30], 0, i912, 'LastCheckpoint')
  request.r(i913[31], i913[32], 0, i912, 'healthController')
  var i917 = i913[33]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i912.tracktors = i916
  var i919 = i913[34]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i912.drivers = i918
  var i921 = i913[35]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i912.trackPrefabs = i920
  request.r(i913[36], i913[37], 0, i912, 'trackParent')
  i912._WheatCullDistance = i913[38]
  request.r(i913[39], i913[40], 0, i912, 'trackContentGenerator')
  request.r(i913[41], i913[42], 0, i912, 'wheatGenerator')
  request.r(i913[43], i913[44], 0, i912, 'roadGenerator')
  request.r(i913[45], i913[46], 0, i912, 'ghostReader')
  return i912
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i926 = root || request.c( 'LunaUIFields' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'ObjectiveHintText')
  i926.ObjectiveHintString = i927[2]
  request.r(i927[3], i927[4], 0, i926, 'LevelFailedButtonText')
  i926.LevelFailedButtonString = i927[5]
  request.r(i927[6], i927[7], 0, i926, 'LevelCompleteButtonText')
  i926.LevelCompleteButtonString = i927[8]
  return i926
}

Deserializers["Localization"] = function (request, data, root) {
  var i928 = root || request.c( 'Localization' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'englishAsset')
  request.r(i929[2], i929[3], 0, i928, 'russianAsset')
  return i928
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i930 = root || request.c( 'WheatGenerator' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'wheatPiece')
  request.r(i931[2], i931[3], 0, i930, 'trackContentGenerator')
  request.r(i931[4], i931[5], 0, i930, 'carUserControl')
  return i930
}

Deserializers["Products"] = function (request, data, root) {
  var i932 = root || request.c( 'Products' )
  var i933 = data
  i932.OnProductsNumberChanged = request.d('ProductsEvent', i933[0], i932.OnProductsNumberChanged)
  return i932
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i934 = root || request.c( 'ProductsEvent' )
  var i935 = data
  i934.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i935[0], i934.m_PersistentCalls)
  return i934
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i936 = root || request.c( 'TrackContentGenerator' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'healthController')
  var i939 = i937[2]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i936.AlreadyGenerated = i938
  request.r(i937[3], i937[4], 0, i936, 'parentForPlacing')
  var i941 = i937[5]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i936.obstaclesPrefabs = i940
  var i943 = i937[6]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i936.hardObstaclesPrefabs = i942
  var i945 = i937[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i936.bonusesPrefabs = i944
  request.r(i937[8], i937[9], 0, i936, 'configFile')
  request.r(i937[10], i937[11], 0, i936, 'products')
  request.r(i937[12], i937[13], 0, i936, 'boosts')
  return i936
}

Deserializers["Boosts"] = function (request, data, root) {
  var i948 = root || request.c( 'Boosts' )
  var i949 = data
  var i951 = i949[0]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('Boosts+DataItem', i951[i + 0]));
  }
  i948.Data = i950
  return i948
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i954 = root || request.c( 'Boosts+DataItem' )
  var i955 = data
  i954.Kind = i955[0]
  i954.TimeLeft = i955[1]
  return i954
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i956 = root || request.c( 'GhostWriter' )
  var i957 = data
  i956.timer = i957[0]
  var i959 = i957[1]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('GhostWriter+Entry', i959[i + 0]));
  }
  i956.data = i958
  request.r(i957[2], i957[3], 0, i956, 'carUserControl')
  return i956
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i962 = root || request.c( 'GhostWriter+Entry' )
  var i963 = data
  i962.kind = i963[0]
  i962.time = i963[1]
  i962.distance = i963[2]
  i962.sideOffset = i963[3]
  i962.speed = i963[4]
  return i962
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i964 = root || request.c( 'GhostReader' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'ghost')
  request.r(i965[2], i965[3], 0, i964, 'pathCreator')
  i964.timer = i965[4]
  var i967 = i965[5]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('GhostReader+Entry', i967[i + 0]));
  }
  i964.data = i966
  return i964
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i970 = root || request.c( 'GhostReader+Entry' )
  var i971 = data
  i970.kind = i971[0]
  i970.time = i971[1]
  i970.distance = i971[2]
  i970.sideOffset = i971[3]
  i970.speed = i971[4]
  return i970
}

Deserializers["RoadGenerator"] = function (request, data, root) {
  var i972 = root || request.c( 'RoadGenerator' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'fencePiece')
  return i972
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i975 = data
  i974.m_MoveSpeed = i975[0]
  i974.m_TurnSpeed = i975[1]
  i974.m_RollSpeed = i975[2]
  i974.m_FollowVelocity = !!i975[3]
  i974.m_FollowTilt = !!i975[4]
  i974.m_SpinTurnLimit = i975[5]
  i974.m_TargetVelocityLowerLimit = i975[6]
  i974.m_SmoothTurnTime = i975[7]
  request.r(i975[8], i975[9], 0, i974, 'm_Target')
  i974.m_AutoTargetPlayer = !!i975[10]
  i974.m_UpdateType = i975[11]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i977 = data
  i976.enabled = !!i977[0]
  i976.aspect = i977[1]
  i976.orthographic = !!i977[2]
  i976.orthographicSize = i977[3]
  i976.backgroundColor = new pc.Color(i977[4], i977[5], i977[6], i977[7])
  i976.nearClipPlane = i977[8]
  i976.farClipPlane = i977[9]
  i976.fieldOfView = i977[10]
  i976.depth = i977[11]
  i976.clearFlags = i977[12]
  i976.cullingMask = i977[13]
  i976.rect = i977[14]
  request.r(i977[15], i977[16], 0, i976, 'targetTexture')
  return i976
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i978 = root || request.c( 'CameraFollower' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'Target')
  i978.PositionOffset = new pc.Vec3( i979[2], i979[3], i979[4] )
  i978.RotationOffset = new pc.Vec3( i979[5], i979[6], i979[7] )
  i978.CameraSpeed = i979[8]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i981 = data
  i980.enabled = !!i981[0]
  i980.type = i981[1]
  i980.color = new pc.Color(i981[2], i981[3], i981[4], i981[5])
  i980.cullingMask = i981[6]
  i980.intensity = i981[7]
  i980.range = i981[8]
  i980.spotAngle = i981[9]
  i980.shadows = i981[10]
  i980.shadowNormalBias = i981[11]
  i980.shadowBias = i981[12]
  i980.shadowStrength = i981[13]
  i980.lightmapBakeType = i981[14]
  i980.renderMode = i981[15]
  request.r(i981[16], i981[17], 0, i980, 'cookie')
  i980.cookieSize = i981[18]
  return i980
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'm_FirstSelected')
  i982.m_sendNavigationEvents = !!i983[2]
  i982.m_DragThreshold = i983[3]
  return i982
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i985 = data
  i984.m_HorizontalAxis = i985[0]
  i984.m_VerticalAxis = i985[1]
  i984.m_SubmitButton = i985[2]
  i984.m_CancelButton = i985[3]
  i984.m_InputActionsPerSecond = i985[4]
  i984.m_RepeatDelay = i985[5]
  i984.m_ForceModuleActive = !!i985[6]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i987 = data
  i986.enabled = !!i987[0]
  i986.planeDistance = i987[1]
  i986.referencePixelsPerUnit = i987[2]
  i986.isFallbackOverlay = !!i987[3]
  i986.renderMode = i987[4]
  i986.renderOrder = i987[5]
  i986.sortingLayerName = i987[6]
  i986.sortingOrder = i987[7]
  i986.scaleFactor = i987[8]
  request.r(i987[9], i987[10], 0, i986, 'worldCamera')
  i986.overrideSorting = !!i987[11]
  i986.pixelPerfect = !!i987[12]
  i986.targetDisplay = i987[13]
  i986.overridePixelPerfect = !!i987[14]
  return i986
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i989 = data
  i988.m_UiScaleMode = i989[0]
  i988.m_ReferencePixelsPerUnit = i989[1]
  i988.m_ScaleFactor = i989[2]
  i988.m_ReferenceResolution = new pc.Vec2( i989[3], i989[4] )
  i988.m_ScreenMatchMode = i989[5]
  i988.m_MatchWidthOrHeight = i989[6]
  i988.m_PhysicalUnit = i989[7]
  i988.m_FallbackScreenDPI = i989[8]
  i988.m_DefaultSpriteDPI = i989[9]
  i988.m_DynamicPixelsPerUnit = i989[10]
  return i988
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i991 = data
  i990.m_IgnoreReversedGraphics = !!i991[0]
  i990.m_BlockingObjects = i991[1]
  i990.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i991[2] )
  return i990
}

Deserializers["Countdown"] = function (request, data, root) {
  var i992 = root || request.c( 'Countdown' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'CountdownText')
  request.r(i993[2], i993[3], 0, i992, 'Go_Image')
  request.r(i993[4], i993[5], 0, i992, 'Outline')
  request.r(i993[6], i993[7], 0, i992, 'MainWindow')
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i995 = data
  i994.m_Alpha = i995[0]
  i994.m_Interactable = !!i995[1]
  i994.m_BlocksRaycasts = !!i995[2]
  i994.m_IgnoreParentGroups = !!i995[3]
  i994.enabled = !!i995[4]
  return i994
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.Outline' )
  var i997 = data
  i996.m_EffectColor = new pc.Color(i997[0], i997[1], i997[2], i997[3])
  i996.m_EffectDistance = new pc.Vec2( i997[4], i997[5] )
  i996.m_UseGraphicAlpha = !!i997[6]
  return i996
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i998 = root || request.c( 'WinScreenWidget' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'RaceCar')
  request.r(i999[2], i999[3], 0, i998, 'WheatText')
  request.r(i999[4], i999[5], 0, i998, 'GemText')
  request.r(i999[6], i999[7], 0, i998, 'GameManager')
  request.r(i999[8], i999[9], 0, i998, 'products')
  return i998
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i1000 = root || request.c( 'EndGameButton' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'GameManager')
  return i1000
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i1002 = root || request.c( 'LongTapButton' )
  var i1003 = data
  i1002.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i1003[0], i1002.OnMouseDownEvent)
  i1002.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i1003[1], i1002.OnMouseUpEvent)
  return i1002
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1005 = data
  i1004.m_Spacing = i1005[0]
  i1004.m_ChildForceExpandWidth = !!i1005[1]
  i1004.m_ChildForceExpandHeight = !!i1005[2]
  i1004.m_ChildControlWidth = !!i1005[3]
  i1004.m_ChildControlHeight = !!i1005[4]
  i1004.m_ChildScaleWidth = !!i1005[5]
  i1004.m_ChildScaleHeight = !!i1005[6]
  i1004.m_Padding = UnityEngine.RectOffset.FromPaddings(i1005[7], i1005[8], i1005[9], i1005[10])
  i1004.m_ChildAlignment = i1005[11]
  return i1004
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i1006 = root || request.c( 'BoostsPanelCtrl' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'boosts')
  request.r(i1007[2], i1007[3], 0, i1006, 'wgtBoostPrefab')
  return i1006
}

Deserializers["CheatSpeedTuning"] = function (request, data, root) {
  var i1008 = root || request.c( 'CheatSpeedTuning' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'txtSpeed')
  request.r(i1009[2], i1009[3], 0, i1008, 'slider')
  return i1008
}

Deserializers["FPSWriter"] = function (request, data, root) {
  var i1010 = root || request.c( 'FPSWriter' )
  var i1011 = data
  i1010.m_refreshTime = i1011[0]
  return i1010
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i1012 = root || request.c( 'TimeSinceStartup' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'Text')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.atlasId = i1015[1]
  i1014.mipmapCount = i1015[2]
  i1014.hdr = !!i1015[3]
  i1014.size = i1015[4]
  i1014.anisoLevel = i1015[5]
  i1014.filterMode = i1015[6]
  i1014.wrapMode = i1015[7]
  var i1017 = i1015[8]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 4) {
    i1016.push( UnityEngine.Rect.MinMaxRect(i1017[i + 0], i1017[i + 1], i1017[i + 2], i1017[i + 3]) );
  }
  i1014.rects = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.index = i1021[1]
  i1020.startup = !!i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1023 = data
  i1022.ambientIntensity = i1023[0]
  i1022.reflectionIntensity = i1023[1]
  i1022.ambientMode = i1023[2]
  i1022.ambientLight = new pc.Color(i1023[3], i1023[4], i1023[5], i1023[6])
  i1022.ambientSkyColor = new pc.Color(i1023[7], i1023[8], i1023[9], i1023[10])
  i1022.ambientGroundColor = new pc.Color(i1023[11], i1023[12], i1023[13], i1023[14])
  i1022.ambientEquatorColor = new pc.Color(i1023[15], i1023[16], i1023[17], i1023[18])
  i1022.fogColor = new pc.Color(i1023[19], i1023[20], i1023[21], i1023[22])
  i1022.fogEndDistance = i1023[23]
  i1022.fogStartDistance = i1023[24]
  i1022.fogDensity = i1023[25]
  i1022.fog = !!i1023[26]
  request.r(i1023[27], i1023[28], 0, i1022, 'skybox')
  i1022.fogMode = i1023[29]
  var i1025 = i1023[30]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1025[i + 0]) );
  }
  i1022.lightmaps = i1024
  i1022.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1023[31], i1022.lightProbes)
  i1022.lightmapsMode = i1023[32]
  i1022.environmentLightingMode = i1023[33]
  i1022.ambientProbe = new pc.SphericalHarmonicsL2(i1023[34])
  request.r(i1023[35], i1023[36], 0, i1022, 'customReflection')
  request.r(i1023[37], i1023[38], 0, i1022, 'defaultReflection')
  i1022.defaultReflectionMode = i1023[39]
  i1022.defaultReflectionResolution = i1023[40]
  i1022.sunLightObjectId = i1023[41]
  i1022.pixelLightCount = i1023[42]
  i1022.defaultReflectionHDR = !!i1023[43]
  i1022.hasLightDataAsset = !!i1023[44]
  i1022.hasManualGenerate = !!i1023[45]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'lightmapColor')
  request.r(i1029[2], i1029[3], 0, i1028, 'lightmapDirection')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1030 = root || new UnityEngine.LightProbes()
  var i1031 = data
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1039 = data
  i1038.name = i1039[0]
  var i1041 = i1039[1]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1041[i + 0]) );
  }
  i1038.passes = i1040
  var i1043 = i1039[2]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1043[i + 0]) );
  }
  i1038.defaultParameterValues = i1042
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1046 = root || new pc.UnityShaderPass()
  var i1047 = data
  i1046.passType = i1047[0]
  i1046.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[1], i1046.zTest)
  i1046.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[2], i1046.zWrite)
  i1046.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[3], i1046.culling)
  i1046.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1047[4], i1046.blending)
  i1046.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1047[5], i1046.alphaBlending)
  i1046.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[6], i1046.colorWriteMask)
  i1046.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[7], i1046.offsetUnits)
  i1046.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[8], i1046.offsetFactor)
  i1046.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[9], i1046.stencilRef)
  i1046.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[10], i1046.stencilReadMask)
  i1046.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[11], i1046.stencilWriteMask)
  i1046.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[12], i1046.stencilOp)
  i1046.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[13], i1046.stencilOpFront)
  i1046.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1047[14], i1046.stencilOpBack)
  var i1049 = i1047[15]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1049[i + 0]) );
  }
  i1046.tags = i1048
  var i1051 = i1047[16]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1051[i + 0]) );
  }
  i1046.variants = i1050
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1053 = data
  i1052.val = i1053[0]
  i1052.name = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1055 = data
  i1054.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[0], i1054.src)
  i1054.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[1], i1054.dst)
  i1054.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[2], i1054.op)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1057 = data
  i1056.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[0], i1056.pass)
  i1056.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[1], i1056.fail)
  i1056.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[2], i1056.zFail)
  i1056.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[3], i1056.comp)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.value = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1064.keywords = i1066
  i1064.vertexProgram = i1065[1]
  i1064.fragmentProgram = i1065[2]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.type = i1073[1]
  i1072.value = new pc.Vec4( i1073[2], i1073[3], i1073[4], i1073[5] )
  i1072.textureValue = i1073[6]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1075 = data
  i1074.name = i1075[0]
  request.r(i1075[1], i1075[2], 0, i1074, 'texture')
  i1074.aabb = i1075[3]
  i1074.vertices = i1075[4]
  i1074.triangles = i1075[5]
  i1074.textureRect = UnityEngine.Rect.MinMaxRect(i1075[6], i1075[7], i1075[8], i1075[9])
  i1074.packedRect = UnityEngine.Rect.MinMaxRect(i1075[10], i1075[11], i1075[12], i1075[13])
  i1074.border = new pc.Vec4( i1075[14], i1075[15], i1075[16], i1075[17] )
  i1074.transparency = i1075[18]
  i1074.bounds = i1075[19]
  i1074.pixelsPerUnit = i1075[20]
  i1074.textureWidth = i1075[21]
  i1074.textureHeight = i1075[22]
  i1074.nativeSize = new pc.Vec2( i1075[23], i1075[24] )
  i1074.pivot = new pc.Vec2( i1075[25], i1075[26] )
  i1074.textureRectOffset = new pc.Vec2( i1075[27], i1075[28] )
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.wrapMode = i1077[1]
  i1076.isLooping = !!i1077[2]
  i1076.length = i1077[3]
  var i1079 = i1077[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1079[i + 0]) );
  }
  i1076.curves = i1078
  var i1081 = i1077[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1081[i + 0]) );
  }
  i1076.events = i1080
  i1076.halfPrecision = !!i1077[6]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1085 = data
  i1084.path = i1085[0]
  i1084.componentType = i1085[1]
  i1084.property = i1085[2]
  i1084.keys = i1085[3]
  var i1087 = i1085[4]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1087[i + 0]) );
  }
  i1084.objectReferenceKeys = i1086
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1091 = data
  i1090.time = i1091[0]
  request.r(i1091[1], i1091[2], 0, i1090, 'value')
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1095 = data
  i1094.functionName = i1095[0]
  i1094.floatParameter = i1095[1]
  i1094.intParameter = i1095[2]
  i1094.stringParameter = i1095[3]
  request.r(i1095[4], i1095[5], 0, i1094, 'objectReferenceParameter')
  i1094.time = i1095[6]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.ascent = i1097[1]
  i1096.originalLineHeight = i1097[2]
  i1096.fontSize = i1097[3]
  var i1099 = i1097[4]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1099[i + 0]) );
  }
  i1096.characterInfo = i1098
  request.r(i1097[5], i1097[6], 0, i1096, 'texture')
  i1096.originalFontSize = i1097[7]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1103 = data
  i1102.index = i1103[0]
  i1102.advance = i1103[1]
  i1102.bearing = i1103[2]
  i1102.glyphWidth = i1103[3]
  i1102.glyphHeight = i1103[4]
  i1102.minX = i1103[5]
  i1102.maxX = i1103[6]
  i1102.minY = i1103[7]
  i1102.maxY = i1103[8]
  i1102.uvBottomLeftX = i1103[9]
  i1102.uvBottomLeftY = i1103[10]
  i1102.uvBottomRightX = i1103[11]
  i1102.uvBottomRightY = i1103[12]
  i1102.uvTopLeftX = i1103[13]
  i1102.uvTopLeftY = i1103[14]
  i1102.uvTopRightX = i1103[15]
  i1102.uvTopRightY = i1103[16]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1105 = data
  i1104.name = i1105[0]
  var i1107 = i1105[1]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1107[i + 0]) );
  }
  i1104.states = i1106
  var i1109 = i1105[2]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1109[i + 0]) );
  }
  i1104.layers = i1108
  var i1111 = i1105[3]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1111[i + 0]) );
  }
  i1104.parameters = i1110
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1115 = data
  i1114.cycleOffset = i1115[0]
  i1114.cycleOffsetParameter = i1115[1]
  i1114.cycleOffsetParameterActive = !!i1115[2]
  i1114.mirror = !!i1115[3]
  i1114.mirrorParameter = i1115[4]
  i1114.mirrorParameterActive = !!i1115[5]
  i1114.motionId = i1115[6]
  i1114.nameHash = i1115[7]
  i1114.fullPathHash = i1115[8]
  i1114.speed = i1115[9]
  i1114.speedParameter = i1115[10]
  i1114.speedParameterActive = !!i1115[11]
  i1114.tag = i1115[12]
  i1114.name = i1115[13]
  i1114.writeDefaultValues = !!i1115[14]
  var i1117 = i1115[15]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1117[i + 0]) );
  }
  i1114.transitions = i1116
  var i1119 = i1115[16]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 2, i1118, '')
  }
  i1114.behaviours = i1118
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1123 = data
  i1122.fullPath = i1123[0]
  i1122.canTransitionToSelf = !!i1123[1]
  i1122.duration = i1123[2]
  i1122.exitTime = i1123[3]
  i1122.hasExitTime = !!i1123[4]
  i1122.hasFixedDuration = !!i1123[5]
  i1122.interruptionSource = i1123[6]
  i1122.offset = i1123[7]
  i1122.orderedInterruption = !!i1123[8]
  i1122.destinationStateNameHash = i1123[9]
  i1122.destinationStateMachineId = i1123[10]
  i1122.isExit = !!i1123[11]
  i1122.mute = !!i1123[12]
  i1122.solo = !!i1123[13]
  var i1125 = i1123[14]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1125[i + 0]) );
  }
  i1122.conditions = i1124
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1131 = data
  i1130.blendingMode = i1131[0]
  i1130.defaultWeight = i1131[1]
  i1130.name = i1131[2]
  i1130.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1131[3], i1130.stateMachine)
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1133 = data
  i1132.id = i1133[0]
  i1132.defaultStateNameHash = i1133[1]
  var i1135 = i1133[2]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1135[i + 0]) );
  }
  i1132.entryTransitions = i1134
  var i1137 = i1133[3]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1137[i + 0]) );
  }
  i1132.anyStateTransitions = i1136
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1141 = data
  i1140.destinationStateNameHash = i1141[0]
  i1140.destinationStateMachineId = i1141[1]
  i1140.isExit = !!i1141[2]
  i1140.mute = !!i1141[3]
  i1140.solo = !!i1141[4]
  var i1143 = i1141[5]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1143[i + 0]) );
  }
  i1140.conditions = i1142
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1147 = data
  i1146.defaultBool = !!i1147[0]
  i1146.defaultFloat = i1147[1]
  i1146.defaultInt = i1147[2]
  i1146.name = i1147[3]
  i1146.nameHash = i1147[4]
  i1146.type = i1147[5]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.bytes64 = i1149[1]
  i1148.data = i1149[2]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1153[i + 0]) );
  }
  i1150.files = i1152
  i1150.componentToPrefabIds = i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1157 = data
  i1156.path = i1157[0]
  request.r(i1157[1], i1157[2], 0, i1156, 'unityObject')
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1161[i + 0]) );
  }
  i1158.scriptsExecutionOrder = i1160
  var i1163 = i1159[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1163[i + 0]) );
  }
  i1158.sortingLayers = i1162
  var i1165 = i1159[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1165[i + 0]) );
  }
  i1158.cullingLayers = i1164
  i1158.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1159[3], i1158.timeSettings)
  i1158.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1159[4], i1158.physicsSettings)
  i1158.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1159[5], i1158.physics2DSettings)
  i1158.removeShadows = !!i1159[6]
  i1158.autoInstantiatePrefabs = !!i1159[7]
  i1158.enableAutoInstancing = !!i1159[8]
  i1158.lightmapEncodingQuality = i1159[9]
  i1158.desiredColorSpace = i1159[10]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.value = i1169[1]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1173 = data
  i1172.id = i1173[0]
  i1172.name = i1173[1]
  i1172.value = i1173[2]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1177 = data
  i1176.id = i1177[0]
  i1176.name = i1177[1]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1179 = data
  i1178.fixedDeltaTime = i1179[0]
  i1178.maximumDeltaTime = i1179[1]
  i1178.timeScale = i1179[2]
  i1178.maximumParticleTimestep = i1179[3]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1181 = data
  i1180.gravity = new pc.Vec3( i1181[0], i1181[1], i1181[2] )
  i1180.defaultSolverIterations = i1181[3]
  i1180.bounceThreshold = i1181[4]
  i1180.autoSyncTransforms = !!i1181[5]
  i1180.autoSimulation = !!i1181[6]
  var i1183 = i1181[7]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1183[i + 0]) );
  }
  i1180.collisionMatrix = i1182
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1187 = data
  i1186.enabled = !!i1187[0]
  i1186.layerId = i1187[1]
  i1186.otherLayerId = i1187[2]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'material')
  i1188.gravity = new pc.Vec2( i1189[2], i1189[3] )
  i1188.positionIterations = i1189[4]
  i1188.velocityIterations = i1189[5]
  i1188.velocityThreshold = i1189[6]
  i1188.maxLinearCorrection = i1189[7]
  i1188.maxAngularCorrection = i1189[8]
  i1188.maxTranslationSpeed = i1189[9]
  i1188.maxRotationSpeed = i1189[10]
  i1188.timeToSleep = i1189[11]
  i1188.linearSleepTolerance = i1189[12]
  i1188.angularSleepTolerance = i1189[13]
  i1188.defaultContactOffset = i1189[14]
  i1188.autoSimulation = !!i1189[15]
  i1188.queriesHitTriggers = !!i1189[16]
  i1188.queriesStartInColliders = !!i1189[17]
  i1188.callbacksOnDisable = !!i1189[18]
  i1188.reuseCollisionCallbacks = !!i1189[19]
  i1188.autoSyncTransforms = !!i1189[20]
  var i1191 = i1189[21]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1191[i + 0]) );
  }
  i1188.collisionMatrix = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1195 = data
  i1194.enabled = !!i1195[0]
  i1194.layerId = i1195[1]
  i1194.otherLayerId = i1195[2]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1199 = data
  i1198.weight = i1199[0]
  i1198.vertices = i1199[1]
  i1198.normals = i1199[2]
  i1198.tangents = i1199[3]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1203 = data
  i1202.mode = i1203[0]
  i1202.parameter = i1203[1]
  i1202.threshold = i1203[2]
  return i1202
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[51],"98":[57],"99":[34],"100":[34],"101":[34],"102":[34],"103":[34],"104":[34],"105":[34],"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[107],"114":[107],"115":[107],"116":[107],"117":[107],"118":[107],"119":[107],"120":[57],"121":[10],"122":[123],"124":[123],"78":[18],"13":[15],"125":[18],"83":[33],"37":[35],"36":[45],"38":[35],"126":[127],"128":[18],"129":[24,18],"80":[78],"23":[24,18],"130":[18],"79":[78],"131":[18],"132":[18],"84":[18],"133":[18],"27":[18],"134":[18],"135":[18],"136":[18],"137":[24,18],"138":[24,18],"139":[18],"140":[18],"141":[18],"20":[18],"22":[24,18],"142":[18],"143":[76],"144":[76],"77":[76],"145":[76],"146":[57],"147":[57],"148":[18],"149":[24,18],"150":[10],"151":[24,18],"152":[24,18],"153":[10,24,18],"154":[18,24],"155":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","WheatSliderWidget","UnityEngine.UI.Text","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.LayoutElement","HealthBar","ShieldBar","UnityEngine.GameObject","UIActiveBoost","ShootButtonCtrl","UnityEngine.UI.Button","UnityEngine.Rigidbody","CarController","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","TrackContentGenerator","WheatGenerator","RoadGenerator","GhostReader","LunaUIFields","Localization","UnityEngine.TextAsset","Products","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","EndGameButton","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","CheatSpeedTuning","FPSWriter","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

