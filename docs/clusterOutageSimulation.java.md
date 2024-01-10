# `clusterOutageSimulation` Submodule <a name="`clusterOutageSimulation` Submodule" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterOutageSimulation <a name="ClusterOutageSimulation" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation mongodbatlas_cluster_outage_simulation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulation;

ClusterOutageSimulation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .outageFilters(IResolvable)
    .outageFilters(java.util.List<ClusterOutageSimulationOutageFilters>)
    .projectId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ClusterOutageSimulationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#cluster_name ClusterOutageSimulation#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.outageFilters">outageFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>></code> | outage_filters block. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#project_id ClusterOutageSimulation#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#id ClusterOutageSimulation#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#cluster_name ClusterOutageSimulation#cluster_name}.

---

##### `outageFilters`<sup>Required</sup> <a name="outageFilters" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.outageFilters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>>

outage_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#outage_filters ClusterOutageSimulation#outage_filters}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#project_id ClusterOutageSimulation#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#id ClusterOutageSimulation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#timeouts ClusterOutageSimulation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.putOutageFilters">putOutageFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutageFilters` <a name="putOutageFilters" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.putOutageFilters"></a>

```java
public void putOutageFilters(IResolvable OR java.util.List<ClusterOutageSimulationOutageFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.putOutageFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.putTimeouts"></a>

```java
public void putTimeouts(ClusterOutageSimulationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClusterOutageSimulation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulation;

ClusterOutageSimulation.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulation;

ClusterOutageSimulation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulation;

ClusterOutageSimulation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulation;

ClusterOutageSimulation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ClusterOutageSimulation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ClusterOutageSimulation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ClusterOutageSimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ClusterOutageSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ClusterOutageSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.outageFilters">outageFilters</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList">ClusterOutageSimulationOutageFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.simulationId">simulationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.startRequestDate">startRequestDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference">ClusterOutageSimulationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.outageFiltersInput">outageFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `outageFilters`<sup>Required</sup> <a name="outageFilters" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.outageFilters"></a>

```java
public ClusterOutageSimulationOutageFiltersList getOutageFilters();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList">ClusterOutageSimulationOutageFiltersList</a>

---

##### `simulationId`<sup>Required</sup> <a name="simulationId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.simulationId"></a>

```java
public java.lang.String getSimulationId();
```

- *Type:* java.lang.String

---

##### `startRequestDate`<sup>Required</sup> <a name="startRequestDate" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.startRequestDate"></a>

```java
public java.lang.String getStartRequestDate();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.timeouts"></a>

```java
public ClusterOutageSimulationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference">ClusterOutageSimulationTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `outageFiltersInput`<sup>Optional</sup> <a name="outageFiltersInput" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.outageFiltersInput"></a>

```java
public java.lang.Object getOutageFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterOutageSimulationConfig <a name="ClusterOutageSimulationConfig" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulationConfig;

ClusterOutageSimulationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .outageFilters(IResolvable)
    .outageFilters(java.util.List<ClusterOutageSimulationOutageFilters>)
    .projectId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ClusterOutageSimulationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#cluster_name ClusterOutageSimulation#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.outageFilters">outageFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>></code> | outage_filters block. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#project_id ClusterOutageSimulation#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#id ClusterOutageSimulation#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#cluster_name ClusterOutageSimulation#cluster_name}.

---

##### `outageFilters`<sup>Required</sup> <a name="outageFilters" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.outageFilters"></a>

```java
public java.lang.Object getOutageFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>>

outage_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#outage_filters ClusterOutageSimulation#outage_filters}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#project_id ClusterOutageSimulation#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#id ClusterOutageSimulation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationConfig.property.timeouts"></a>

```java
public ClusterOutageSimulationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#timeouts ClusterOutageSimulation#timeouts}

---

### ClusterOutageSimulationOutageFilters <a name="ClusterOutageSimulationOutageFilters" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulationOutageFilters;

ClusterOutageSimulationOutageFilters.builder()
    .cloudProvider(java.lang.String)
    .regionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#cloud_provider ClusterOutageSimulation#cloud_provider}. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters.property.regionName">regionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#region_name ClusterOutageSimulation#region_name}. |

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#cloud_provider ClusterOutageSimulation#cloud_provider}.

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#region_name ClusterOutageSimulation#region_name}.

---

### ClusterOutageSimulationTimeouts <a name="ClusterOutageSimulationTimeouts" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulationTimeouts;

ClusterOutageSimulationTimeouts.builder()
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#delete ClusterOutageSimulation#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/resources/cluster_outage_simulation#delete ClusterOutageSimulation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterOutageSimulationOutageFiltersList <a name="ClusterOutageSimulationOutageFiltersList" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulationOutageFiltersList;

new ClusterOutageSimulationOutageFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.get"></a>

```java
public ClusterOutageSimulationOutageFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>>

---


### ClusterOutageSimulationOutageFiltersOutputReference <a name="ClusterOutageSimulationOutageFiltersOutputReference" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulationOutageFiltersOutputReference;

new ClusterOutageSimulationOutageFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.cloudProviderInput">cloudProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.cloudProviderInput"></a>

```java
public java.lang.String getCloudProviderInput();
```

- *Type:* java.lang.String

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.cloudProvider"></a>

```java
public java.lang.String getCloudProvider();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationOutageFilters">ClusterOutageSimulationOutageFilters</a>

---


### ClusterOutageSimulationTimeoutsOutputReference <a name="ClusterOutageSimulationTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.cluster_outage_simulation.ClusterOutageSimulationTimeoutsOutputReference;

new ClusterOutageSimulationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.clusterOutageSimulation.ClusterOutageSimulationTimeouts">ClusterOutageSimulationTimeouts</a>

---



